const btn = document.querySelectorAll('button');
for (let i = 0; i < btn.length; i++) {
    if (i !== 14 && i !== 13) {
        btn[i].addEventListener('click', function () {
            show(this);
        });
    }
}

let ac = document.querySelector('.ac');
ac.onclick = function () {
    screen.textContent = '';
}


//Event Listener added.

let screen = document.querySelector('.result');
function show(item) {
    screen.textContent += item.textContent;
    // analyse(screen.textContent);  
}
let equalsTo = document.querySelector('.eq');
equalsTo.onclick = function () {
    analyse(screen);
}

function analyse(str) {
    let s = str.textContent;
    let num1=new Array(),num2=0,step1=true,step2=true,step3=true,char=new Array(),num=0,j=0;
    let result=new Array(),fa=0;
    for(let i=0;i<s.length;i++){
        if(s[i]>=48 || s[i]<=57){
            num=num*10+Number(s[i]);
            if (i === s.length-1){
                num1.push(num);
            }
        }
        else {
            char.push(s[i]);
            num1.push(num); 
            num=0;   
        }
    }
    console.log(num1,(typeof num1));
    console.log(char, (typeof char));
    // str.textContent=num1[0]
    // str.textContent=num1%10;
    for(let i=0,j=0;i<num1.length,j<char.length;i+=2,j++){
        switch(char[j]){
            case "+":
                result.push(num1[i]+num1[i+1]);
                break;
            case "-":
                result.push(num1[i]-num1[i+1]);
                break;
            case "*":
                result.push(num1[i]*num1[i+1]);
                break;
            case "/":
                result.push(num1[i]/num1[i+1]);
                break;
        }
        if(i!==num.length){
        result.push(num1[i+2]);
        }
    }
    console.log(result);
    for(let i=0;i<1;i++){
        fa+=result[i];
    }
    str.textContent=fa;
    fa=0;
}
