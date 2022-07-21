import * as con from 'constant.js'
function CalculatePoints();

var form = document.getElementById('point-form');
if (form.attachEvent) {
    form.attachEvent("submit", CalculatePoints);
} else {
    form.addEventListener("submit", CalculatePoints);
}
function CalculatePoints(){
    let sum;
    sum = points60(form.elements['60m'].value);
    sum += pointsHJ(form.elements['hoog'].value);
    sum += pointsSP(form.elements['kogel'].value);
    sum += pointsBal(form.elements['bal'].value);
    sum += pointsLJ(form.elements['ver'].value);
    sum += pointsEsta60(form.elements['esta'].value);
    return sum;
}