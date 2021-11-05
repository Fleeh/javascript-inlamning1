let rasmus_obj = {
    firstName: "Rasmus",
    lastName: 'Henriksson',
    age: 26,
    isActive: true,
    adress: [
        {
    
            adressLine: "Svanåallén 2",
            zipCode: "70232",
            city: "Örebro"
       }
    ],

    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}

let message = {
    deviceId: "device1",
    temperature: 0,
    humidity: 88
}

class User {
    constructor(firstName, lastName, age, isActive, adress) {
        this.firstName = firstName
        this.lastName = lastName
        this.ageName = age
        this.isActive = isActive
        this.adress = adress

    }
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}




let rasmus = new User("Rasmus","Henriksson",26,true,{adressLine: "Svanåallén 2", zipcode: "70232", City: "Örebro"})

console.log(rasmus)