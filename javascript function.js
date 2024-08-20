const result = [50,100,150,200,250,300];


var value = 250;


function js(result,value){
    for ( var i = 0; i < result.length; i++){
        if (result[i] == value){
            return i;
        }else{
            continue;
        }
    }
    return -1;
}

document.getElementById('java').innerHTML = js( result,value);
console.log(java);




