


//封装setState方法
setStateAsync(state){
    return new Promise((resolve)=>{
        this.setState(state,resolve)
    })
}

//调用方法
async fun1(){
    await setStateAsync({//处理setState异步问题
        name:1,
        age:1
    });
}