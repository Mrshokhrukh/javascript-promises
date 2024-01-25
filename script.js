/**
 *   1)  javascript is a syncrounous single-threaded language
 *
 *      call stack [  ],    execution context [ memory | code ];
 *
 *      event loop (),  calback queue [ ],  microtask queue [ ]
 *
 *
 *  2) Promises
 *
 *      promise.all([p1, p2, p3]) =>
 *                         waits for all promises to be finished
 *                         as soon as any promise rejected, promise.all() return error
 *
 *
 *      promise.allSettled([p1, p2, p3]) =>
 *                                waits for all promises to be fulfilled
 *                                if p2 is error returns [p1, error, p3]
 *
 *
 *      promise.race([p1, p2, p3]) =>
 *                  as soon as any promise settled, promise.race() return first settled promise
 *
 *
 *
 *      promise.any([p1, p2, p3]) =>
 *                      waits for first success
 *                      as soon as any promise fulfilled, promise.any() return first fulfilled promise
 *                      if all promise is failed ruturns [err1, err2, err3] aggregateError
 *
 *
 *
 *
 *
 */

let p1 = new Promise((res, rej) => {
  setTimeout(() => res("p1 success"), 3000);
});
let p2 = new Promise((res, rej) => {
  //   setTimeout(res("p2 success"), 1000);
  setTimeout(() => rej("p2 failed"), 1000);
});
let p3 = new Promise((res, rej) => {
  setTimeout(() => res("p3 success"), 2000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

  

/**
 *    2) -----------  Async Await  -------------
 *
 *  a) async function always returns a promise
 *  b) async await is used to handle promises
 *
 */



/**
 * 
 *   3) CALLBACKS
 * 
 * 
 * 
 */

