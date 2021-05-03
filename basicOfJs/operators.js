/** arithmetic opearator */
function arithmetics(a,b,c){
    let s,t,u,v;
    s=((a+b)-c)*a;
    t=s/b;
    a++;
    u=-a;
    v=s**t;
    return `${s}   ${t}   ${u}    ${v}`;
};

console.log(arithmetics(5,3,6,1));

/** assignment */
function assign(x,y,z){
    let s,t;
    x^=y;
    z>>>=2;
    s ?? (s=10);
    t=x;
    x**=s;
    return `${z}   ${s}   ${t}    ${x}`;
};

console.log(assign(5,9,-7));

/** comparison */
let x=55,y=21,z="55";
console.log(x===z);
console.log(x==z);
console.log(x!==z);
console.log(x!=z);

/** bitwise */
console.log(x&y);
console.log(~y);

/** logical */
console.log((x==y || x!=y));
console.log(!(x==y && x!=y));

/** ternary operator */
var result= (x>=y) ? "xxxx" : "yyyy";
console.log(result);

/** unary operator */
const choco={name:"diarymilk",count:10};
delete choco.name;
console.log(choco.name);
console.log(typeof(choco));

/** relational */
const frnds=['jave','rebi','keerthi','tamu'];
console.log(1 in frnds);
console.log("tamu" in frnds); 