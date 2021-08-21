import Place from "./place";

export default class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        cep: string
    ) {
        super(cep);
    }
}