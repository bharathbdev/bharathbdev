
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
























Consider the following Observable:

    const observable = rxjs.Observable.create(observer => {
        console.log('Text inside an observable');
        observer.next('Hello world!');
        observer.complete();
    });
console.log('Before subscribing an Observable');
observable.subscribe((message)=> console.log(message));
When you run the above Observable, you can see messages being displayed in the following order:

    Before subscribing an Observable
Text inside an observable
Hello world!
    As you can see, observables are lazy. Observable runs only when someone subscribes to them hence, the message “Before subscribing…” is displayed ahead of the message inside the observable.

    Now let’s consider a Promise:

    const promise = new Promise((resolve, reject) => {
        console.log('Text inside promise');
        resolve('Hello world!');
    });
console.log('Before calling then method on Promise');
greetingPoster.then(message => console.log(message));

Running the above promise, the messages will be displayed in the following order:

    Text inside promise
Before calling then method on Promise
Hello world!
    As you can see the message inside Promise is displayed first. This means that a promise runs before the then method is called. Therefore, promises are eager
