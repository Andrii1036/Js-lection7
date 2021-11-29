// ----------------------------------------------------------------------------------------------------------------

// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, 
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = () => {
        console.log(`їдемо зі швидкістю ${maxSpeed} км. на годину`)
        console.log('---------------------------------------------')
    };
    this.info = function() {
        console.log(`model->${this.model}`);
        console.log(`manufacturer->${this.manufacturer}`);
        console.log(`year->${this.year}`);
        console.log(`maxSpeed->${this.maxSpeed}`);
        console.log(`engine->${this.engine}`);
        console.log('----------------------------------------------')
    };
    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`нова максимальна швидкість->${this.maxSpeed} км/год`);
        console.log('--------------------------------------------------')
    };
    this.changeYear = function(newValue) {
        this.year = newValue;
        console.log(`новий рік випуску->${this.year}`);
        console.log('--------------------------------------------------')
    };
    this.addDriver = function(driver) {
        this.driver = driver;
    }

};
let driver = {
    name: 'Andrii',
    age: 30,
    drivingExperience: '12 year',

}
let car = new Car(2101, 'VAZ', 1983, 150, 1500);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(50);
car.changeYear(1991);
car.addDriver(driver);
console.log(car);
console.log('---------------------------------------------');
// -------------------------------------------------------------------------------------------

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, 
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км. на годину`)
        console.log('---------------------------------------------')
    };
    info = function() {
        console.log(`model->${this.model}`);
        console.log(`manufacturer->${this.manufacturer}`);
        console.log(`year->${this.year}`);
        console.log(`maxSpeed->${this.maxSpeed}`);
        console.log(`engine->${this.engine}`);
        console.log('----------------------------------------------')
    };
    increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`нова максимальна швидкість->${this.maxSpeed} км/год`);
        console.log('--------------------------------------------------')
    };
    changeYear = function(newValue) {
        this.year = newValue;
        console.log(`новий рік випуску->${this.year}`);
        console.log('--------------------------------------------------')
    };
    addDriver = function(driver) {
        this.driver = driver;
    };
};

let car2 = new Car2('10 - 36', 'KMZ', 1989, 110, 650);
console.log(car2);
car2.drive();
car2.increaseMaxSpeed(20);
car2.info();
car2.changeYear(1994);
car2.addDriver(driver);
console.log(car2);
console.log('---------------------------------------------');
// -----------------------------------------------------------------------------------------------------

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Popelushka(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
};
let candidates = [];
for (i = 1; i <= 10; i++) {
    candidates.push(new Popelushka(`Popelushka${i}`, 18 + i, 34 + i))
};
console.log(candidates);

class Princ {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
};
let princ = new Princ('Andrii', 31, 37);
console.log(princ);

let findPrincec = (candidates, princ) => {
    for (i = 0; i < candidates.length; i++) {
        if (candidates[i].size === princ.shoe) {
            console.log(`принц ${princ.name} знайшов свою принцесу ${candidates[i].name} з ${candidates[i].size} розміром ноги))))`)
            return candidates[i]
        };
    };
};
findPrincec(candidates, princ);
console.log(candidates.find(item => item.size === princ.shoe));
// -----------------------------------------------------------------------------------------------