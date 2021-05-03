//how callback works
let x = function(){
    console.log("I am called inside a function");
};
let y = function(callback){
    console.log("do something");
    callback();
}
y(x);

//add and multiply using callback
let add = function(a,b){
    return a + b;
};
let multiply = function(a,b){
    return a * b;
};
let calc = function(num1,num2,callback){
    return callback(num1,num2);
};
console.log(calc(5,6,add));
console.log(calc(5,6,multiply));

//sorting 
var myArr = [{num:5,str:"apple"},{num:7,str:"cabbage"},{num:1,str:"banana"}];
myArr.sort(function(val1,val2){
    if(val1.str < val2.str){
        return -1;
    }
    else{
        return 1;
    }
});
console.log(myArr);

//synchronous callback
function s1(callback){
    setTimeout(() => {
        console.log("s1");
        callback();
    },5000)
}
function s2(callback){
    setTimeout(() => {
        console.log("s2");
        callback();
    },4000)
}
function s3(callback){
    setTimeout(() => {
        console.log("s3");
        callback();
    },3000)
}
function s4(callback){
    setTimeout(() => {
        console.log("s4");
    },2000)
}

//callback hell
setTimeout(() => 
    s1(()=>{
        s2(()=>{
            s3(()=>{
                s4();
            });
        });
    })
,5000)