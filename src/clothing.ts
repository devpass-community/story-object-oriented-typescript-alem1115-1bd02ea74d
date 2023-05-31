import { Product } from "./product";

export class Clothing extends Product {
    size: string

    constructor(id: number, name: string, price: number, size: string) {
        super(id, name, price);
        this.size = size
    }

    override toString() {
        return ("Product: " + this.name + ", Price: $" + this.price + ", Size: " + this.size)
    }
}

export { }