import { Client } from "../interface/client";
import Commerce from "./commerce";

export default class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private CNPJ: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0,7
    }

    public getCnpj(): string {
        return this.CNPJ;
    }
}