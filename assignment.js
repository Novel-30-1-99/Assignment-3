function kilometerToMeter(x){
    kilometers = 1000;
    meter = kilometers * x;
    console.log(meter);
    return x;
}
kilometerToMeter(3);



function budgetCalculator(watch,mobile,laptop){
    
    var watchPrice = 50, mobilePrice = 100, laptopPrice = 500 ;

      totalWatchPrice = watch*watchPrice;
      totalMobilePrice = mobile*mobilePrice;
      totalLaptopPrice = laptop*laptopPrice;

      totalBudget = totalWatchPrice + totalMobilePrice + totalLaptopPrice;

      console.log(totalBudget);

      return  totalBudget;
}
budgetCalculator(4,3,3);





function hotelCost(day){

    if (day<=10) {
        rent = day*100;
    }

    else if (day>=11 && day<=20) {
        extraDay = day-10;
        extraRent = extraDay*80;
        rent = extraRent + (10*100);
    
    }

    else if (day>=21) {
        extraDay = day-20;
        extraRent = extraDay*50;
        rent = extraRent + (10*100) + (10*80);
    }

    console.log(rent);
    return rent;
    }
    hotelCost(50);





function megaFreind() {
    var friendsName = ['novel',  'sammoo', 'aditto','ziko', 'prio'];
    var max = 0;
    var index = 0;
    for (i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length > max) {
            max = friendsName[i].length;
            index = i;
        }
    }
    console.log(friendsName[index]);
   return friendsName[index];
}

megaFreind();