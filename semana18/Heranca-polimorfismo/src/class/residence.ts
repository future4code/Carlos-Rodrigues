import Place from "./place";

export default class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        cep: string
    ) {
        super(cep);
    }
}