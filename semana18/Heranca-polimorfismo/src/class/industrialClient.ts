import { Client } from "../interface/client";
import Industry from "./industry";

export default class IndustrialClient extends Industry implements Client {
    constructor (
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industrialRegister: number,
        machinesQuantity: number,
        cep: string

    ) {
        super(machinesQuantity, cep )
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0,6 + this.machinesQuantity * 100;
    }

    public getRegister(): number {
        return this.industrialRegister
    }
}