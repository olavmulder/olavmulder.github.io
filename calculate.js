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
    sum = con.points60(form.elements['60m'].value);
    sum += con.pointsHJ(form.elements['hoog'].value);
    sum += con.pointsSP(form.elements['kogel'].value);
    sum += con.pointsBal(form.elements['bal'].value);
    sum += con.pointsLJ(form.elements['ver'].value);
    sum += con.pointsEsta60(form.elements['esta'].value);
    console.log(sum);
    return sum;
}