// import { resolve } from "path";

// function looper(multiplier) {
//     for (var i = 0; i <= 1000 * multiplier; i++) { }

//     console.log('looper end');
// }

// function doPromise() {
//     return new Promise((res, rej) => {
//         console.log('Hey Promise!');

//         res('resolved!!');
//     })
// }


// Problem 1:
// setTimeout(() => {
//     console.log('timeout--A');
//     setTimeout(() => console.log('timeoutB'), 2)
//     setTimeout(() => { console.log('timeoutA') }, 2)
//     // Promise.resolve(console.log(2));
// }, 100)
// Promise.resolve(console.log('PromiseA'))


// Promise.resolve(2)

// Problem 2: 

// console.log(1)
// setTimeout(() => {
//     console.log('timeout');
//     doPromise().then(val => console.log('promiseA', val));
// }, 1000);
// console.log(2);
// doPromise().then(x => console.log('promiseB', x))



// function getPromise(value, forceReject=false) {
//     return new Promise((resolve, reject) => {
//         return forceReject ? reject({error: "Something went wrong"}) : resolve(value);
//     });
// }

// function promiseAll(promises) {
//     promises = promises || [];
//     const results = [];

//     return new Promise(
//         (resolveAll, rejectAll) => {
//             for(const promise of promises) {
//                 promise
//                 .then(
//                     res => {
//                         results.push(res);
//                         if(results.length === promises.length) {
//                             resolveAll(results);
//                         }
//                     }
//                 )
//                 .catch(
//                     err => rejectAll(err)
//                 )
//             }
//         }
//     )
// }

// var result = promiseAll([
//     getPromise(123),
//     getPromise("test"),
//     getPromise({ test: 123 }, true)
// ])
// .then(res => console.log("successful: ",res))
// .catch(err => console.error("error: ",err))


/**
 * 
 * @param promiseList 
 * @returns 
 */
function promiseAll<T>(promiseList: Promise<T>[]): Promise<T[]> {

    const isCompleted = () => {
        return promiseList.length === results.length;
    };

    const results: T[] = [];

    return new Promise((resolve: Function, reject: Function) => {

        if (!promiseList.length) {
            resolve([]);
            return;
        }

        promiseList.forEach((promise: Promise<T>, index: number) => {
            promise.then((value: T) => {
                results[index] = value;
                console.log('Resolved');
            }).catch((err) => {
                console.log('RejeCted');
                reject(err);
            }).finally(() => {
                if (isCompleted()) {
                    resolve(results);
                }
            })
        });

    });

}

const promises = [
    Promise.resolve(11),
    Promise.resolve(true),
    Promise.resolve([1,2,3])
];

// Promise.all(promises).then(x => console.log('promie', x));

promiseAll(promises as any).then(x => console.log('custom', x));