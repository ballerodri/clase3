class ProductManager {
    constructor() {
        this.products = []
    }

    // Metodos

    // Metodo para agregar producto
    addProduct(product) {
        if (this.products.find(producto => producto.code == product.code)) {
            return "Producto existente"
        } else {
            this.products.push(product) //Agrega producto si este no existe previamente
        }
    }

    // Metodo para obtener todos los productos
    getProducts() {
        return this.products
    }

    // Metodo para obtener el producto con el ID indicado
    getProductById(id) {
        const product = this.products.find(producto => producto.id == id)
        if (product) {
            return product
        }
        return "Not Found"
    }
}


class Product {
    constructor(title = "", description = "", price = 0, thumbnail = "", code = "", stock = 0) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.id = Product.incrementID()
    }

    //Metodo estatico para incrementar el id del producto
    static incrementID() {
        if (this.idIncrement) { //Existe esta propiedad
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }
}

const product1 = new Product("Notebook", "Dell", 550.000, "https://http2.mlstatic.com/D_NQ_NP_2X_897791-MLA48049063179_102021-F.webp", "AAAAA", 1)
const product2 = new Product("Monitor", "led 24", 65.000, "https://http2.mlstatic.com/D_NQ_NP_2X_973781-MLA48131216539_112021-F.webp", "BBB", 1)


const productManager = new ProductManager()
productManager.addProduct(product1)
productManager.addProduct(product2)
console.log(productManager.addProduct(product1))
console.log(productManager.getProductById(2))
console.log(productManager.getProductById(5))
console.log(productManager.getProducts())