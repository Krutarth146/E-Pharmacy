function add(a,b){
    console.log(a+b)
}

function sub(a,b){
    console.log(a-b)
}

function mul(a,b){
    console.log(a*b)
}

//Security error->>>  Set-ExecutionPolicy RemoteSigned -Scope CurrentUserSet-ExecutionPolicy RemoteSigned -Scope CurrentUser


module.exports.addition=add
module.exports.sub=sub
module.exports.mul=mul