const Packet = {

  vertexShader: `
    uniform float time;
    uniform vec3 center;
    uniform float timeOffset;

    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPos;

    void main() {
      vUv = uv;
      vNormal = normal;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vec3 dir = center - worldPos.xyz;
      float t = mod(0.002 * time + timeOffset, 50.);
      float s = step(t, 10.);
      float ss = (1. - s) * step(t, 14.);
      // worldPos.xyz += s * min(5. *t, 1.) * dir.xyz;
      worldPos.xyz += s * min(20.*t, length(dir)) * normalize(dir);
      // worldPos.x += 0.2 *sin(worldPos.x+.002*time);
      // worldPos.y += 0.2 *sin(worldPos.y+.002*time);

      worldPos.xyz = ss * center + (1.-ss) * worldPos.xyz;
      vPos = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,

  fragmentShader: `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPos;

  uniform float time;
  uniform vec3 color;
    void main() {
      vec3 finalColor = color;

      vec3 dir = vec3(1., 1., 100.5) - vPos;
      float light = dot(normalize(dir), vNormal);
      finalColor += light * vec3(0.2, 0.2, 0.2);
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,

};
