async function func1(){
    let promise= new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('done with async/await'),1000)
    })
    let result=await promise;
    // wait until the promise resolve
    console.log(result);
}
func1()