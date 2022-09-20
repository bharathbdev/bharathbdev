
1using callback





function A( callback ) {
    setTimeout( () => {
        callback("result of a()");
    }, 1000 ); // 1 second delay
}
function B( callback ) {
    setTimeout( () => {
        callback("result of b()");
    }, 2000 ); // 2 second delay
}






output
"callbackA", "result of a()"
"callbackB", "result of b()"





function A( callback ) {
    setTimeout( () => {
        callback();
    }, 1000 ); // 1 second delay
}
function B( callback ) {
    setTimeout( () => {
        callback();
    }, 2000 ); // 1 second delay
}
function callbackMethodA() {
    console.log("callbackA",'result of a()');
    B(callbackMethodB );
}
function callbackMethodB() {
    console.log("callbackB",'result of b()');
}
A(callbackMethodA );




2
using await



const a = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of a()' ), 1000 ); // 1s delay
} );

const b = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of b()' ), 2000 ); // 2s delay
} );


output
"awaita", "result of a()"
"awaitb", "result of b()"




const a = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of a()' ), 1000 ); // 1s delay
} );

const b = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of b()' ), 2000 ); // 1s delay
} );

const doJobs = async () => {
    var resulta = await a();
    console.log("awaita",resulta)
    var resultb = await b();
    console.log("awaitb",resultb)
};

doJobs();



3
uisng promise then



const a = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of a()' ), 1000 ); // 1s delay
} );

const b = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of b()' ), 2000 ); // 2s delay
} );




output
"promisea", "result of a()"
"promiseb", "result of b()"









const a = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of a()' ), 1000 ); // 1s delay
} );

const b = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of b()' ), 2000 ); // 1s delay
} );

a().then( ( result ) => {
    console.log( 'promisea', result );
    b().then( ( result ) => {
        console.log( 'promiseb', result );
    } )
} )

or
const a = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of a()' ), 1000 ); // 1s delay
} );

const b = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of b()' ), 2000 ); // 1s delay
} );

a().then( ( result ) => {
    console.log( 'promisea', result );
    return b()
} ).then(( result ) => {
    console.log( 'promiseb', result );
} )





4 combine all of them output should be


4a

"awaita", "result of a()"
"awaitb", "result of b()"
"callbackA", "result of a()"
"callbackB", "result of b()"
"promisea", "result of a()"
"promiseb", "result of b()"














const a = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of a()' ), 1000 ); // 1s delay
} );

const b = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of b()' ), 2000 ); // 1s delay
} );

const doJobs = async () => {
    var resulta = await a();
    console.log("awaita",resulta)
    var resultb = await b();
    console.log("awaitb",resultb)
    A(callbackMethodA );
};

doJobs();






function A( callback ) {
    setTimeout( () => {
        callback("result of a()");
    }, 1000 ); // 1 second delay
}
function B( callback ) {
    setTimeout( () => {
        callback("result of b()");
    }, 2000 ); // 1 second delay
}
function callbackMethodA(argA) {
    console.log("callbackA",argA);
    B(callbackMethodB );
}
function callbackMethodB(argB) {
    console.log("callbackB",argB);
    a().then( ( result ) => {
        console.log( 'promisea', result );
        b().then( ( result ) => {
            console.log( 'promiseb', result );
        } )
    } )
}



4b

"callbackA", "result of a()"
"callbackB", "result of b()"
"awaita", "result of a()"
"awaitb", "result of b()"
"promisea", "result of a()"
"promiseb", "result of b()"









const a = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of a()' ), 1000 ); // 1s delay
} );

const b = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of b()' ), 2000 ); // 1s delay
} );







function A( callback ) {
    setTimeout( () => {
        callback();
    }, 1000 ); // 1 second delay
}
function B( callback ) {
    setTimeout( () => {
        callback();
    }, 2000 ); // 1 second delay
}
function callbackMethodA() {
    console.log("callbackA",'result of a()');
    B(callbackMethodB );
}
async function callbackMethodB() {
    console.log("callbackB",'result of b()');
    var resulta = await a();
    console.log("awaita",resulta)
    var resultb = await b();
    console.log("awaitb",resultb)

    a().then( ( result ) => {
        console.log( 'promisea', result );
        b().then( ( result ) => {
            console.log( 'promiseb', result );
        } )
    } )



}
A(callbackMethodA );


4c
"promisea", "result of a()"
"promiseb", "result of b()"
"callbackA", "result of a()"
"callbackB", "result of b()"
"awaita", "result of a()"
"awaitb", "result of b()"

const a = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of a()' ), 2000 ); // 1s delay
} );

const b = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of b()' ), 1000 ); // 1s delay
} );









function A( callback ) {
    setTimeout( () => {
        callback();
    }, 2000 ); // 1 second delay
}
function B( callback ) {
    setTimeout( () => {
        callback();
    }, 1000 ); // 1 second delay
}
function callbackMethodA() {
    console.log("callbackA",'result of a()');
    B(callbackMethodB );
}
async function callbackMethodB() {
    console.log("callbackB",'result of b()');
    var resulta = await a();
    console.log("awaita",resulta)
    var resultb = await b();
    console.log("awaitb",resultb)
}


a().then( async ( result ) => {
    console.log( 'promisea', result );
    b().then( async ( result ) => {
        console.log( 'promiseb', result );

        A(callbackMethodA );
    } )
} )





4d

"callbackA", "result of a()"
"callbackB", "result of b()"
"promisea", "result of a()"
"promiseb", "result of b()"
"awaita", "result of a()"
"awaitb", "result of b()"





const a = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of a()' ), 2000 ); // 1s delay
} );

const b = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of b()' ), 1000 ); // 1s delay
} );








function A( callback ) {
    setTimeout( () => {
        callback();
    }, 2000 ); // 1 second delay
}
function B( callback ) {
    setTimeout( () => {
        callback();
    }, 1000 ); // 1 second delay
}
function callbackMethodA() {
    console.log("callbackA",'result of a()');
    B(callbackMethodB );
}
async function callbackMethodB() {
    console.log("callbackB",'result of b()');


    a().then( ( result ) => {
        console.log( 'promisea', result );
        b().then( async ( result ) => {
            console.log( 'promiseb', result );
            var resulta = await a();
            console.log("awaita",resulta)
            var resultb = await b();
            console.log("awaitb",resultb)
        } )
    } )




}
A(callbackMethodA );



4e


"promisea", "result of a()"
"promiseb", "result of b()"
"awaita", "result of a()"
"awaitb", "result of b()"
"callbackA", "result of a()"
"callbackB", "result of b()"




const a = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of a()' ), 2000 ); // 1s delay
} );

const b = () => new Promise( resolve => {
    setTimeout( () => resolve( 'result of b()' ), 1000 ); // 1s delay
} );









function A( callback ) {
    setTimeout( () => {
        callback();
    }, 2000 ); // 1 second delay
}
function B( callback ) {
    setTimeout( () => {
        callback();
    }, 1000 ); // 1 second delay
}
function callbackMethodA() {
    console.log("callbackA",'result of a()');
    B(callbackMethodB );
}
async function callbackMethodB() {
    console.log("callbackB",'result of b()');
}


a().then( async ( result ) => {
    console.log( 'promisea', result );
    b().then( async ( result ) => {
        console.log( 'promiseb', result );
        var resulta = await a();
        console.log("awaita",resulta)
        var resultb = await b();
        console.log("awaitb",resultb)
        A(callbackMethodA );
    } )
} )





