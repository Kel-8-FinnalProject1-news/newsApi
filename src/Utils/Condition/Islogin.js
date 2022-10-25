const Islogin =() =>{
    if(localStorage.getItem('token')){
        return true
    }else{
        return false
    }
}

export {Islogin}