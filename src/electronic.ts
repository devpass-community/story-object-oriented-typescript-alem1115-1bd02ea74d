import { Product } from "./product";

export class Electronic extends Product {
    public brand: string

    constructor(id: number, name: string, price: number, brand: string) {
        super(id, name, price);
        this.brand = brand
    }
}

export { }