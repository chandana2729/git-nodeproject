function sum(a,b){
    const promise = new Promise((res,rej) => {
        const sum = a+b;

        if(sum<10){
            res('Node project is successfully running...');
        }
        else{
            rej('Oops! there\'s a problem with the project');
        }     
    })
    return promise;
}

sum(4,5).then(
    val => {
        console.log(val)
    })
    .catch(err => {
        console.log('Program has an error')
    })






