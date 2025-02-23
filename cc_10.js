// Task 1 - Creating a product class

class Product { 
    constructor(name, id, price, stock) {
    this.name = name;
    this.id = id;
    this.price = price;
    this.stock = stock;
 }; //Create class product

 getDetails() { 
     return 'Product: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: ${this.stock}';
 }; //Return product details

 updateStock(quantity) { 
    this.stock -= quantity;
 }; //Modify stock level when order is placed
};

const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

// Task 2 - Creating an order class

class Product {
    constructor(orderId, product, quantity) { //Set product properties
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(this.quantity);
    };

    getOrderDetails() {
        return 'Order ID: ${this.orderID}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}'
        //Return order details
    };
};

const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)

// Task 3 - Creating an inventory class

class Inventory {
    constructor() {
        this.products = [];
        this.orders = []; //Task 4 - add order array in inventory class
    };

    addProduct(product) {
        this.products.push(product);
    }; //Add new product to inventory

    listProducts() {
        return this.products.forEach(product => console.log(product.getDetails()));
    }; //Log product details

    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            let order = new Order(orderId, product, quantity);
            this.order.push(order);
        } else {
            return 'Low Stock! ${product.name} is ${product.stock}'; //Unavailable due to low stock message
        }; //Create and add order if stock is available
    };
};

const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"
