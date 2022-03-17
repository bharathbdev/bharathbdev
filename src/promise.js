
function squareRoot(value) {
    return new Promise((resolve, reject) => {
        if (value > 0) {
            resolve(Math.sqrt(value));
        } else {
            reject("Can't find square root for negetive number");
        }
    });
}

squareRoot(10)
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    })




const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve("I'm a Promise!");
    }, 5000);
}, reject => {

});

promise.then(value => console.log(value));







import { Observable } from 'rxjs';

const observable = new Observable(observer => {
    setTimeout(() => {
        observer.next('Message from a Observable!');
    }, 3000);
});

observable.subscribe(value => console.log(value));
