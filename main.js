let ent=document.getElementById("enter");
let func=document.getElementById("mainFun");
let xFunc=document.getElementById("x");
let yFunc=document.getElementById("y");
let fFunc=document.getElementById("f");
let sFunc=document.getElementById("s");
let x1Func=document.getElementById("x1");
let x2Func=document.getElementById("x2");
let calcButt=document.getElementById("butt");


// "-x^2+2y-60+50+5x^2-x^2+x^2-y-5y=0"
ent.onkeyup=function(){
    func.value=ent.value
}
let all="";
calcButt.onclick=function(){
all=func.value
console.log(all)
let allS=all.split("=");
console.log(allS);
//left of function##################
let aL=allS[0];
let bL="";
let cL="";
let dXl=[];
let dYl=[];
let dFl=[];

for(let i=0;i<aL.length;i++){
    if(aL[i]==="-"&&aL.includes("+")){
        bL=aL.replace(/\-/g," -");
        cL=bL.replace(/\+/g," +");
    }else if(aL[i]==="-"&&!aL.includes("+")){
        bL=aL.replace(/\-/g," -");
        cL=bL;
    }else if(aL[i]==="+"&&!aL.includes("-")){
        bL=aL.replace(/\+/g," +");
        cL=bL;
    }else if(!aL.includes("+")&&!aL.includes("-")){
        bL=(" "+aL)
        cL=bL
    }
}
console.log(aL);
console.log(bL);
console.log(cL);
let sL=cL.split(" ")
console.log(sL);
console.log(sL);
console.log(sL);
//x factor xxxxxxxxxxxxxxxxxxxxxxxxx
let lX="";
let xLeft=0;
for(let i=0;i<sL.length;i++){
    if(sL[i]===""){
        continue  
    }
    if(sL[i].includes("x")){
        dXl.push(sL[i]);
        lX=dXl.map(function(ele){
            return dXl.indexOf(ele)===0&&ele.length<4?ele=1:dXl.indexOf(ele)===0&&ele.length<5&&ele.includes("-")?ele=-1:ele.length<5&&ele.includes("-")?ele=-1:ele.length<5&&ele.includes("+")?ele=1:parseFloat(ele);
          })
          console.log(dXl);
          console.log(lX);
         xLeft=lX.reduce(function(acc,current){
            return acc+current;
        })
        console.log(xLeft);
    }
   
}

//y factor yyyyyyyyyyyyyyyyyyyyyyyyyy
let lY="";
let yLeft=0;
for(let i=0;i<sL.length;i++){
    if(sL[i]===""){
        continue  
    }
    if(sL[i].includes("y")){
        dYl.push(sL[i]);
        lY=dYl.map(function(ele){
            return dYl.indexOf(ele)===0&&ele.length<2?ele=1:dYl.indexOf(ele)===0&&ele.length<3&&ele.includes("-")?ele=-1:ele.length<3&&ele.includes("-")?ele=-1:ele.length<3&&ele.includes("+")?ele=1:parseFloat(ele);
          })
          console.log(dYl);
          console.log(lY);
          yLeft=lY.reduce(function(acc,current){
            return acc+current;
        })

        console.log(yLeft);
    }
}

// free factor ffffffffffffffffffffffff
let fLeft=0
for(let i=0;i<sL.length;i++){
    if(sL[i]===""){
        continue  
    }
    if(!sL[i].includes("x")&&!sL[i].includes("y")){
        dFl.push(parseFloat(sL[i]));
        fLeft=dFl.reduce(function(acc,current){
            return acc+current
        })
        console.log(dFl);
        console.log(fLeft);
    }
}
console.log(dFl);
console.log(fLeft);



//right of function##################

let aR=allS[1];
console.log(typeof aR)
let bR="";
let cR="";
let dXr=[];
let dYr=[];
let dFr=[];

let allX=0;
let allY=0;
let allF=0;
if(aR==="0"){
    allX=xLeft;
    allY=yLeft;
    allF=fLeft;
}else{

for(let i=0;i<aR.length;i++){
    if(aR[i]==="-"&&aR.includes("+")){
        bR=aR.replace(/\-/g," -");
        cR=bR.replace(/\+/g," +");
    }else if(aR[i]==="-"&&!aR.includes("+")){
        bR=aR.replace(/\-/g," -");
        cR=bR;
    }else if(aR[i]==="+"&&!aR.includes("-")){
        bR=aR.replace(/\+/g," +");
        cR=bR;
    }else if(!aR.includes("+")&&!aR.includes("-")){
        bR=(" "+aR)
        cR=bR;
    }
}
console.log(cR+"olsxdfuhlbikjb");
let sR=cR.split(" ")
console.log(sR);
//x factor xxxxxxxxxxxxxxxxxxxxxxxxx
let rX="";
let xRight=0;
for(let i=0;i<sR.length;i++){
    if(sR[i]===""){
        continue  
    }
    if(sR[i].includes("x")){
        dXr.push(sR[i]);
        rX=dXr.map(function(ele){
            return dXr.indexOf(ele)===0&&ele.length<4?ele=1:dXr.indexOf(ele)===0&&ele.length<5&&ele.includes("-")?ele=-1:ele.length<5&&ele.includes("-")?ele=-1:ele.length<5&&ele.includes("+")?ele=1:parseFloat(ele);
          })
          console.log(dXr);
          console.log(rX)
        xRight=rX.reduce(function(acc,current){
            return acc+current;
        })
        console.log(xRight);
        xRight=xRight*-1
    }
}
console.log(xRight);

//y factor yyyyyyyyyyyyyyyyyyyyyyyyyy
let rY="";
let yRight=0;
for(let i=0;i<sR.length;i++){
    if(sR[i]===""){
        continue  
    }
    if(sR[i].includes("y")){
        dYr.push(sR[i]);
        rY=dYr.map(function(ele){
            return dYr.indexOf(ele)===0&&ele.length<2?ele=1:dYr.indexOf(ele)===0&&ele.length<3&&ele.includes("-")?ele=-1:ele.length<3&&ele.includes("-")?ele=-1:ele.length<3&&ele.includes("+")?ele=1:parseFloat(ele);
          })
          console.log(dYr)
          console.log(rY)
          yRight=rY.reduce(function(acc,current){
            return acc+current;
        })
       
        console.log(yRight);
        yRight=yRight*-1
    }
}
console.log(yRight);

// free factor ffffffffffffffffffffffff
let fRight=0;
for(let i=0;i<sR.length;i++){
    if(sR[i]===""){
        continue  
    }
    if(!sR[i].includes("x")&&!sR[i].includes("y")){
        dFr.push(parseFloat(sR[i]));
         fRight=dFr.reduce(function(acc,current){
            return acc+current
        })
        fRight=fRight*-1
        console.log(dFr);
        console.log(fRight);
    }
}
console.log(dFr);
console.log(fRight);

// all x , y , free #####################


 allX=xLeft+xRight;
 allY=yLeft+yRight;
 allF=fLeft+fRight;
}
xFunc.value=`a = ${allX}`;
yFunc.value=`b = ${allY} `;
fFunc.value=`c = ${allF}`;
console.log(allX);
console.log(allY);
console.log(allF);

//find x1################

b=Math.pow(allY,2);
console.log(b);
c=4*allX*allF;
console.log(c);
sFunc.value=(`Special Value = ${b-c}`);
function showNan(){
    x1Func.value=`X1 = ${((allY*-1)-(Math.pow((b+(-c)),0.5)))/(2*allX)}`;
    x2Func.value=`X2 = ${((allY*-1)+(Math.pow((b+(-c)),0.5)))/(2*allX)}`;
    if(x1Func.value.includes("NaN")){
    x1Func.value=`X1 = ${allY*-1} - ${(Math.pow(((b+(-c))*-1),0.5)).toFixed(4)} T`;
    }
    if(x2Func.value.includes("NaN")){
    x2Func.value=`X2 = ${allY*-1} + ${(Math.pow(((b+(-c))*-1),0.5)).toFixed(4)} T`;
    return x2Func.value;
    }
    return x1Func.value;
}

showNan();

 }

//  if(x1Func!==""){
//     x1Func.style.width="80%"
//  }