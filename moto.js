export class motocicleta{

    constructor(dealer,model,year,maxSpeed,fuelCapacity,price)
    {
        this.dealer = dealer;
        this.model = model;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity,
        this.price = price;
    }

    mostrarDetalles()
    {
        console.log(`${this.dealer} ${this.model} (${this.year}) - Speed: ${this.maxSpeed} -> price : ${this.price}`);
    }
}