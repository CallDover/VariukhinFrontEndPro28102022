
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfo() {
        const info = `${this.name}, ${this.age}`;
        console.log(info);
        return info;
    }
}
class Car {
     constructor(brand, model, year, number) {
         this.brand = brand;
        this.model = model;
         this.year = year;
         this.number = number;
     }




    setOwner(person) {
        const isPerson = person instanceof Human;
        if (!isPerson) {
            console.error('Владелец должен быть человеком');
            return;
        } 
        if (+person.age < 18) {
            console.error('Владелец должен быть старше 18');
            return;
        }
        this.owner = person;
    }

    showInfo() {
        let info = `${this.brand} ${this.model} ${this.year} ${this.license}`;
        if (this.owner) {
            info += ` ${this.owner.showInfo()}`
        }
        console.log(info);
        return info;
    }
}

const firstOwner = new Human('Lorena', '17');
const secondOwner = new Human('Adam', '21');
const thirdOwner = 'Nazar';
const audi= new Car('audi', 'R8', '2015', 'UA 2007 CH');
const bmw = new Car('bmw', 'X6', 2022, 'UA 2241 CH');
const ford = new Car('ford', 'Focus', 2004, 'UA 7777 CH')

bmw.setOwner(firstOwner);
bmw.showInfo();

audi.setOwner(secondOwner);
audi.showInfo();

audi.setOwner(thirdOwner);
    
secondOwner.showInfo();