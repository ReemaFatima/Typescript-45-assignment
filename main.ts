function manufacturing_car(manufacturer , model, ...options){
    let car = {
        manufacturer: manufacturer,
        model: model,
    };


//add additional options

options.forEach(option => {
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();

});

return car;
}

let my_car = manufacturing_car("changan", "alsvin", "color : silver", "year:2023");

console.log(my_car);