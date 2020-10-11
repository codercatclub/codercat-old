const fetchData = paths =>
  new Promise((resolve, reject) => {
    const promises = [];

    paths.forEach(path => {
      const p = fetch(path).then(res => {
        if (!res.ok) {
          reject('Request failed with status ', res.status);
        }
        return res.json();
      });

      promises.push(p);
    });

    Promise.all(promises).then(results => {
      const allData = [];
      results.forEach(r => {
        allData.push(r);
      });

      resolve(allData);
    });
  });

const getAvg = a => {
  let avg = 0;
  let count = 0;
  a.forEach(i => {
    if (i !== 0) {
      avg += i;
      count ++;
    }
  });
  return avg/count;
};

const goodMin = a => {
  let tmp = 10000;
  a.forEach(i => {
    if (i < tmp && i !== 0) {
      tmp = i;
    }
  });
  return tmp;
};

const getMinMaxArr = data => {
  let min = 9999999;
  let max = 0;

  data.forEach((a,index) => {
    if(index > data.length - 3){
      return;
    }
    minTmp = goodMin(a);
    if (minTmp < min) {
      min = minTmp;
    }

    maxTmp = Math.max(...a);
    if (maxTmp > max) {
      max = maxTmp;
    }
  });

  return [min, max];
};

const getMinMax = data => {
  let min = 9999999;
  let max = 0;
  data.forEach((a,index) => {
    const [minTmp, maxTmp] = getMinMaxArr(a);
    if (minTmp < min) {
      min = minTmp;
    }
    if (maxTmp > max) {
      max = maxTmp;
    }
  });

  return [min, max];
};

const fit = (value, x1, y1, x2, y2) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

function cartesian2Polar(x, y) {
  distance = Math.sqrt(x * x + y * y);
  radians = Math.atan2(y, x); //This takes y first
  degrees = radians * (180 / Math.PI);
  return { distance, radians, degrees };
}
