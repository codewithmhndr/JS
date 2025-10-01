let prices = [250,645,300,900,50];
console.log("Prices Before Offer", prices);
for (var val of prices){
    let offer = val/10;
    val = val-offer;
    console.log("The Final Offers Is:",val);
    
};

