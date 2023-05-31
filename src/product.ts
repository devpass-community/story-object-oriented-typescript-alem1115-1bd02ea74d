export class Product {
    public id: number
    public name: string
    public price: number

    constructor(id: number, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
    }

    public increasePrice(perc: number) {
        this.price = this.price * (1 + perc / 100)
    }

    public decreasePrice(perc: number) {
        this.price = this.price * (1 - perc / 100)
    }
}

export { }
