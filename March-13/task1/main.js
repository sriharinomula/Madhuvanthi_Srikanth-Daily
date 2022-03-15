var layer = 0;
var layer1  = document.getElementById('layer1');
var layer2  = document.getElementById('layer2');
var layer3  = document.getElementById('layer3');
var layer4  = document.getElementById('layer4');
var layer5  = document.getElementById('layer5');
var candle  = document.getElementById('candle');
var total = 0;

document.getElementById("Chocolatebtn").onclick = function(){
    document.getElementById('chocolateBill').innerHTML = 'Chocolate -- 300';
    layer++;
    total += 300;
    if(layer==1){
        layer1.style.visibility = 'visible';
        layer1.style.background = 'rgb(150,75,0)';
    }
    if(layer==2){
        layer2.style.visibility = 'visible';
        layer2.style.background = 'rgb(150,75,0)';
    }
    if(layer==3){
        layer3.style.visibility = 'visible';
        layer3.style.background = 'rgb(150,75,0)';
    }
    if(layer==4){
        layer4.style.visibility = 'visible';
        layer4.style.background = 'rgb(150,75,0)';
    }
    if(layer==5){
        layer5.style.visibility = 'visible';
        layer5.style.background = 'rgb(150,75,0)';
    }
    if(layer>5){
        total -= 300;
        alert("OOPS!! You Can't add more layers");
        candle.style.visibility = 'visible';
        document.getElementById('total').innerHTML = 'Total -- '+total;
    }
}

document.getElementById("Strawberrybtn").onclick = function(){
    document.getElementById('strawberryBill').innerHTML = 'Strawberry-- 100';
    layer++;
    total += 100;
    if(layer==1){
        layer1.style.visibility = 'visible';
        layer1.style.background = 'rgb(227, 115, 131)';
    }
    if(layer==2){
        layer2.style.visibility = 'visible';
        layer2.style.background = 'rgb(227, 115, 131)';
    }
    if(layer==3){
        layer3.style.visibility = 'visible';
        layer3.style.background = 'rgb(227, 115, 131)';
    }
    if(layer==4){
        layer4.style.visibility = 'visible';
        layer4.style.background = 'rgb(227, 115, 131)';
    }
    if(layer==5){
        layer5.style.visibility = 'visible';
        layer5.style.background = 'rgb(227, 115, 131)';
    }
    if(layer>5){
        total -= 100;
        alert("OOPS!! You Can't add more layers");
        candle.style.visibility = 'visible';
        document.getElementById('total').innerHTML = 'Total -- '+total;
    }
}

document.getElementById("Butterscotchbtn").onclick = function(){
    document.getElementById('butterscotchBill').innerHTML = 'Butterscotch - 200';
    layer++;
    total += 200;
    if(layer==1){
        layer1.style.visibility = 'visible';
        layer1.style.background = 'rgb(250, 250, 136)';
    }
    if(layer==2){
        layer2.style.visibility = 'visible';
        layer2.style.background = 'rgb(250, 250, 136)';
    }
    if(layer==3){
        layer3.style.visibility = 'visible';
        layer3.style.background = 'rgb(250, 250, 136)';
    }
    if(layer==4){
        layer4.style.visibility = 'visible';
        layer4.style.background = 'rgb(250, 250, 136)';
    }
    if(layer==5){
        layer5.style.visibility = 'visible';
        layer5.style.background = 'rgb(250, 250, 136)';
    }
    if(layer>5){
        total -= 200;
        alert("OOPS!! You Can't add more layers");
        candle.style.visibility = 'visible';
        document.getElementById('total').innerHTML = 'Total -- '+total;
    }
}

document.getElementById("Vannilabtn").onclick = function(){
    document.getElementById('vannilaBill').innerHTML = 'Vannila -- 250';
    layer++;
    total += 250;
    if(layer==1){
        layer1.style.visibility = 'visible';
        layer1.style.background = 'white';
    }
    if(layer==2){
        layer2.style.visibility = 'visible';
        layer2.style.background = 'white';
    }
    if(layer==3){
        layer3.style.visibility = 'visible';
        layer3.style.background = 'white';
    }
    if(layer==4){
        layer4.style.visibility = 'visible';
        layer4.style.background = 'white';
    }
    if(layer==5){
        layer5.style.visibility = 'visible';
        layer5.style.background = 'white';
    }
    if(layer>5){
        total -= 250;
        alert("OOPS!! You Can't add more layers");
        candle.style.visibility = 'visible';
        document.getElementById('total').innerHTML = 'Total -- '+total;
    }
}

document.getElementById("Redvelvetbtn").onclick = function(){
    document.getElementById('redvelvetBill').innerHTML = 'Redvelvet -- 350';
    layer++;
    total += 350;
    if(layer==1){
        layer1.style.visibility = 'visible';
        layer1.style.background = 'rgb(128, 0, 0)';
    }
    if(layer==2){
        layer2.style.visibility = 'visible';
        layer2.style.background = 'rgb(128, 0, 0)';
    }
    if(layer==3){
        layer3.style.visibility = 'visible';
        layer3.style.background = 'rgb(128, 0, 0)';
    }
    if(layer==4){
        layer4.style.visibility = 'visible';
        layer4.style.background = 'rgb(128, 0, 0)';
    }
    if(layer==5){
        layer5.style.visibility = 'visible';
        layer5.style.background = 'rgb(128, 0, 0)';
    }
    if(layer>5){
        total -= 350;
        alert("OOPS!! You Can't add more layers");
        candle.style.visibility = 'visible';
        document.getElementById('total').innerHTML = 'Total -- '+total;
    }
}

document.getElementById("buy").onclick = function(){
    if(layer>=5)
        candle.style.visibility = 'visible';
    document.getElementById('total').innerHTML = 'Total -- '+total;
}
