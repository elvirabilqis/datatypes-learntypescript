/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */


const productCode: string = "KBR-001";
const productName: string = "Mechanical Keyboard RGB";
const originalPrice: number = 850000;
const discountPercentage: number = 25;
const quantity: number = 2;
const isPremiumMember: boolean = true;
const isFreeShipping: boolean = isPremiumMember;
const stockAvailable: number = 18;

console.log("=== Flash Sale Product Info ===");
console.log("Product Code:", productCode);
console.log("Product Name:", productName);
console.log("Original Price:", originalPrice);
console.log("Discount Percentage:", discountPercentage + "%");
console.log("Quantity:", quantity);
console.log("Is Premium Member:", isPremiumMember);
console.log("Is Free Shipping:", isFreeShipping);
console.log("Stock Available:", stockAvailable);