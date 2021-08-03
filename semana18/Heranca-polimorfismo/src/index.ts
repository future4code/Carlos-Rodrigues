import Customer from "./class/customer";
import User from "./class/user";

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