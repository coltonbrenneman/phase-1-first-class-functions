function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
    return function Colton(){}
}

function returnsAnAnonymousFunction(){
    return function (){}
}