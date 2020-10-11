function Node(obj, targetPos, packets, track, info) {
    this.targetPos = targetPos;
    this.obj = obj;
    this.packets = packets;
    this.track = track;
    this.info = info;
}
const triBufferGeo = new THREE.BufferGeometry();
var triVerts = new THREE.BufferAttribute( new Float32Array( 9 ), 3 );
triBufferGeo.addAttribute( 'position', triVerts );
triVerts.array[0] = 1.35 * -1;
triVerts.array[1] = 1.35 * -2;
triVerts.array[2] = 1.35 * 0;
triVerts.array[3] = 1.35 * -1;
triVerts.array[4] = 1.35 * 2;
triVerts.array[5] = 1.35 * 0;
triVerts.array[6] = 1.35 * 2.5;
triVerts.array[7] = 1.35 * 0;
triVerts.array[8] = 1.35 * 0;

//INIT THREE THINGS
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  25,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(0, 10, 300);
const renderer = new THREE.WebGLRenderer({
  'antialias':true
});
renderer.setSize(window.innerWidth, window.innerHeight);
window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener( 'mousedown', onMouseDown, false );
window.addEventListener( 'mouseup', onMouseUp, false );
window.addEventListener( 'mousemove', onMouseMove, false );
window.addEventListener( 'click', onClick, false );

// raycast light and plane
const backplane = new THREE.Mesh(new THREE.PlaneGeometry(400, 400, 32), new THREE.MeshBasicMaterial());
backplane.position.z = -100;
var light = new THREE.PointLight( 0xffffff, 15, 208 );
scene.add( light );

// background cubes
const backgroundCubeMat = new THREE.MeshPhongMaterial({
  color: new THREE.Color("#00c1a8"),
  side: THREE.DoubleSide,
});
for(let q = -50; q <50; q+=2){
  for(let w=-50; w<50; w+=2){
    const c = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.5,0.5), backgroundCubeMat);
    c.position.set(5*q + Math.random(), 5*w + Math.random(), -100);
    scene.add(c)
  }
}
// begin wifi data load
const filePaths = ['out/avalanche.json', 'out/zion.json', 'out/denhack.json', 'out/denver.json', 'out/airport.json'];
const trackPaths = ['avalanche zone', 'zion pioneer lodge', 'denhac hackerspace', 'rodeway inn, denver', 'denver intl airport'];
const colorList = ["#ff00ff", "#14ff01", "#01f9ff", "#a700ce"];
const highlightColor = "#01f9ff";
const fallbackColor = "#14ff01";
const nodeList = [];
const lineList = [];
(async () => {
  const allData = await fetchData(filePaths);
  const [min, max] = getMinMax(allData);
  for(let d = 0 ; d < allData.length; d++){
    const data = allData[d];
    // play button triangle
    const triMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(fallbackColor),
      side: THREE.DoubleSide,
    });
    const tri = new THREE.Mesh(triBufferGeo, triMat);
    tri.index = d;
    scene.add(tri);

    // header for info text
    let info = "<p2>SESSION INFO</p2><br><br>";
    info += "<p2>LOCATION:</p2> " + trackPaths[d] + "<br><br>";
    info += "<p2>CAPTURE TIME:</p2> " + data[data.length - 1] + " sec" + "<br><br>"
    info += "<p2>RECIPIENT & AVG RSSI:</p2> <br><br>"

    // populate packets
    const packetList = [];
    const addressList = data[data.length - 2];
    let count = 0
    for (let i = 0; i < data.length; i += 1) {
      if(i > data.length - 3){
        //last two lines are for data
        continue;
      }
      const avg = getAvg(data[i]);
      const avgFit = fit(avg, min, max, 0, 5);
      info += addressList[i] + ": " + Math.ceil(avg/-0.4) + " dBm"+ "<br>"
      const offsetR = i + avgFit + 3;
      const offsetA = i;

      for (let j = 0; j < data[i].length; j += 2) {
        const packet = data[i][j];
        if (packet == 0) {
          continue;
        }
        const s = fit(packet, min, max, 1, 0.1);
        const size = s
        const packetGeo = new THREE.BoxGeometry(size, size, size);
        const row = Math.floor(j/20)
        const r = offsetR  + 1.5 * row * size;
        const val = j - row * 20;
        const a = (4 * val/20) + offsetA;
        // Convert polar to cartesian
        let x = r * Math.cos(a);
        let y = r * Math.sin(a);
        var packetMat = new THREE.ShaderMaterial( {
          uniforms:     {
            color: { value: new THREE.Color(colorList[i%colorList.length]) },
            center: {value: tri.position},
            timeOffset: {value: count},
            time: {value: 0}
          },
          vertexShader:   Packet.vertexShader,
          fragmentShader: Packet.fragmentShader,
        });
        count ++;
        const cube = new THREE.Mesh(packetGeo, packetMat);
        tri.add(cube);
        cube.position.set(x, y, 0);
        packetList.push(cube);
      }
    }
    nodeList.push(new Node(tri,
      tri.position.clone(),
      packetList,
      document.getElementById(trackPaths[d]),
      info
    ));
  }
  // set up lines between nodes
  nodeList.forEach((node, index) => {
    //draw a line between each node
    var lineMat = new THREE.LineDashedMaterial( {
      color: 0x00c1a8,
      linewidth: 2,
      scale: 4,
      dashSize: 2,
      gapSize: 12,
    } );
    var lineGeo = new THREE.Geometry();
    lineGeo.vertices.push(
      (index == 0)? nodeList[nodeList.length - 1].obj.position : nodeList[index-1].obj.position,
    	node.obj.position
    );
    var line = new THREE.Line( lineGeo, lineMat );
    lineList.push(line)
    scene.add( line );
    if(index%2 == 1){
      var lineGeo = new THREE.Geometry();
      lineGeo.vertices.push(
        (index == 0)? nodeList[nodeList.length - 1].obj.position : nodeList[index-1].obj.position,
        nodeList[(index + 2)%nodeList.length].obj.position
      );
      var line2 = new THREE.Line( lineGeo, lineMat );
      lineList.push(line2)
      scene.add( line2 );
    }
  })
  updateNodeTargets();
})();


// interaction
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let touse = new THREE.Vector2();
let lastMousePos = new THREE.Vector2();
let curClicked = "";
let isDragging = false;
let lastHighlighted = 0;

function onMouseUp( event ) {
  isDragging = false;
}
function onMouseDown( event ) {
  isDragging = true;
	lastMousePos.x = ( event.clientX / window.innerWidth );
	lastMousePos.y = ( event.clientY / window.innerHeight );
}
function onMouseMove( event ) {
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  raycaster.setFromCamera( mouse, camera );
  // check against back plane
  let intersects = raycaster.intersectObject( backplane );
  if(intersects[0]){
    light.position.copy(intersects[0].point);
    light.position.z = 100;
  }
  // check against node play buttons
  intersects = raycaster.intersectObjects( nodeList.map((t) => {return t.obj}) );
  if(intersects[0]){
    if(intersects[0].index != lastHighlighted){
      nodeList[intersects[0].object.index].obj.material.color = new THREE.Color(highlightColor);
      lastHighlighted = intersects[0].object.index;
    }
  } else if(lastHighlighted >=0){
    nodeList[lastHighlighted].obj.material.color = new THREE.Color(fallbackColor);
    lastHighlighted = -1;
  }
//30
  if(curClicked == "" || !isDragging) return;
	touse.x = ( event.clientX / window.innerWidth );
	touse.y = ( event.clientY / window.innerHeight );
  let delta = new THREE.Vector2().subVectors(touse,lastMousePos);
  lastMousePos.copy(touse);
  var deltaRotationQuaternion = new THREE.Quaternion()
  .setFromEuler(new THREE.Euler(
      5 * delta.y,
      5 * delta.x,
      0,
      'XYZ'
  ));
  curClicked.quaternion.multiplyQuaternions(deltaRotationQuaternion, curClicked.quaternion);
}

let startSound = document.getElementById("start");
let scratchSound = document.getElementById("scratch");
scratchSound.volume = 0.4;
function onClick( event ) {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  raycaster.setFromCamera( mouse, camera );
  let intersects = raycaster.intersectObjects( nodeList.map((t) => {return t.obj}) );
  if(!intersects[0]) return;
  if(curClicked == "" || (curClicked.uuid !== intersects[0].object.uuid)){
    curClicked = intersects[0].object
    curClicked.position.set(0,150,20);
    camera.position.set(0,150,100);
    nodeList[curClicked.index].targetPos.set(0,150,0);
    camera.lookAt(curClicked.position);
    document.getElementById("info").style.display = "block";
    document.getElementById("info").innerHTML = nodeList[curClicked.index].info;
    setTimeout(function(){
      nodeList[curClicked.index].track.play();
    }, 500)
    startSound.play();
  } else {
    // zoom out
    scratchSound.play();
    nodeList[curClicked.index].track.pause();
    curClicked.quaternion.set(0,0,0,1);
    curClicked.position.copy(nodeList[curClicked.index].targetPos);
    camera.position.set(0, 10, 300);
    camera.lookAt(new THREE.Vector3(0,0,0));
    curClicked = ""
    document.getElementById("info").style.display = "none";
    updateNodeTargets();
  }
}

let lastA = 0;
let nPartitions = 15;
var arr = new Array(nPartitions);
function emptyPadding(i) {
  let cur = i;
  let prev = (i > 0) ? i -1 : arr.length - 1;
  let next = (i >= arr.length-1) ? 0 : i +1;
  return (arr[cur] == 0 && arr[prev] == 0 && arr[next] == 0);
}
function validatePos(id) {
  for(let i = id; i < arr.length; i++){
    if(emptyPadding(i)){
      let a = (i/nPartitions) * (2*Math.PI);
      arr[i] =  1;
      return a;
    }
  }
  for(let i = 0; i < id; i++){
    if(emptyPadding(i)){
      let a = (i/nPartitions) * (2*Math.PI);
      arr[i] =  1;
      return a;
    }
  }
}

function updateNodeTargets() {
  let r = 3 * Math.random();
  arr.fill(0);
  lastA += Math.PI + Math.random();
  curA = lastA;
  nodeList.forEach((node, index) => {
    let r = (60 - 20 * Math.random());
    let a = (curA + (index%3)*Math.PI + 2 * Math.random())% (2*Math.PI);
    let id = Math.floor(a * (nPartitions/(2*Math.PI)));
    if(!emptyPadding(id)){
      a = validatePos(id);
    } else {
      arr[id] = 1;
    }
    curA = a;
    let x = (Math.min(window.innerWidth,800)/800) * r * Math.cos(a);
    let y = r * Math.sin(a);
    node.targetPos.set(x, y, 0);
  });
}
function updateNodeState() {
  nodeList.forEach((node, index) => {
    node.obj.position.lerp(node.targetPos,0.02);
    node.packets.forEach((p) => {
      p.material.uniforms.time.value = curTime - startTime;
    })
  });
  lineList.forEach((line) => {
    line.geometry.verticesNeedUpdate = true;
    line.computeLineDistances();
    line.geometry.lineDistancesNeedUpdate = true;
  })
}
let startTime = Date.now()
const animate = function() {
  requestAnimationFrame(animate);
  curTime = Date.now()

  updateNodeState();
  renderer.render(scene, camera);
};

animate();
document.body.appendChild(renderer.domElement);
