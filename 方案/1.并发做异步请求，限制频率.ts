
/**
 * @param urls 
 * @param max 
 * @param callback 
 */
export default function sendRequest (p: Array<Promise<any>>, max: number, callback: () => void): void {
  if (p.length === 0) return callback && callback()
  const am = p.splice(0, max)

  for (let i = 0; i < am.length; i++) {
    am[i] = Promise.resolve(loadImg(am[i]))
  }

  Promise.all(am).then(() => {
    sendRequest(p, max, callback)
  })
}
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = (e) => {
      console.log('一张图片加载完成', url);
      resolve(e);
    };
    img.onerror = reject;
    img.src = url;
  });
}