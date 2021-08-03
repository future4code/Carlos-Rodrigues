import Commerce from "./class/commerce";
import Customer from "./class/customer";
import Industry from "./class/industry";
import Place from "./class/place";
import Residence from "./class/residence";
import User from "./class/user";
import { Client } from "./interface/client";

const user = new User('aha', 'abc@d.com', 'carlos', 'abcd')

const customer = new Customer('223', 'abc@d.com', 'carlos', 'abcd', 'semcartao')

console.log(
    customer.purchaseTotal,
    customer.getCreditCard(),
    customer.getEmail(),
    customer.getId(),
    customer.getName(),
    customer.introduceYourSelf()
)

const client: Client = {
    name: "Clint",
    registrationNumber: 123124,
    consumedEnergy: 3000,
    calculateBill:() => {
        return 10
    }
}

console.log(
    client.name,
    client.registrationNumber,
    client.consumedEnergy,
    client.calculateBill()
)

// const placeToFail = new Place('')

const residence = new Residence(4, '87550970')
console.log(residence.getCep())

const commerce = new Commerce(10, '87550970')
console.log(commerce.getCep())

const industry = new Industry(100, '87550970')
console.log(industry.getCep())