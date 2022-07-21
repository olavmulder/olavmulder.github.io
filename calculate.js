function points60(time){
    let runA = 15365;
    let runB = 1058;
    return (runA/time-runB);
}
function pointsEsta60(time){
    let estaA = 59225;
    let estaB = 1030;
    return (estaA/time-estaB);
}

function pointsHJ(hight){
    if(hight >1.35){
        return (1977.53 *(sqrt(hight) - 1698.5));
    }else{
        return ((hight-0.67) * 733.33333 + 100.7);
    }
}
function pointsLJ(distance){
    if(distance >4.41 ){
        return (887.99 * sqrt(distance) - 1264.5);
    }else{
        return ((distance - 1.91) * 200 + 100.5);
    }
}
function pointsSP(distance){
    return (303.73 * sqrt(distance) - 337.5);
}
function pointsBal(distance){
    return (126 * sqrt(distance) - 245.5);
}

function CalculatePoints(){
    let sum;
    sum = points60(form.elements['60m'].value);
    sum += pointsHJ(form.elements['hoog'].value);
    sum += pointsSP(form.elements['kogel'].value);
    sum += pointsBal(form.elements['bal'].value);
    sum += pointsLJ(form.elements['ver'].value);
    sum += pointsEsta60(form.elements['esta'].value);
    console.log(sum);
    return sum;
}

var form = document.getElementById('point-form');
if (form.attachEvent) {
    form.attachEvent("submit", CalculatePoints);
} else {
    form.addEventListener("submit", CalculatePoints);

}
