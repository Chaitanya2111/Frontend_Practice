// console.log("1");

// setTimeout(function timeout(){
//     console.log("2");
// },5000);


// setTimeout(function timeout(){
//     console.log("3");
// },0);

// console.log("4")


for(var i=0;i<10;i++){
    setTimeout(() => {
        console.log(i);
    }, 1000)
}