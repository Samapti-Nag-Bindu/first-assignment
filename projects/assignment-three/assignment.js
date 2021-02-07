
// kilometerToMeter convert process (first problem)

function kilometerToMeter (kilometer){
    var meter = kilometer * 1000;
    return meter;
}

// var roadMeter = kilometerToMeter (10);
// console.log(roadMeter);

//Two Watch, Three Mobile & Two laptop budgetCalculator (second problem)

function budgetCalculator (){

    let watch = 50 * 2; //two watch
    let mobile = 100 * 3;  //three mobile
    let laptop = 500 * 2;  //two laptop

    let budgetCalculator = (watch + mobile + laptop);
    // console.log(budgetCalculator);
    return budgetCalculator;

}
budgetCalculator()

//30 Days hotelCost (third problem)

function hotelCost (){

    let first10Days = 10 * 100;  //first 10 days per cost 100
    let second10Days = 10 * (100 - 20);  //second 10 days per cost 20% discount
    let third10Days = 10 * (100 - 50);  //third next all days per cost 50% discount

    let hotelCost = (first10Days + second10Days + third10Days);
    // console.log(hotelCost);
    return hotelCost;
}
hotelCost()

//(fourth problem)

