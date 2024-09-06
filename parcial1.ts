class Products {
    private codigo: string;
    private nombre: string;
    private costo: number;
    private venta: number;

    constructor(codigo: string, nombre: string, costo: number, venta: number) {
        this.codigo = codigo
        this.nombre = nombre
        this.costo = costo
        this.venta = venta
    }

//Funciones para obtener los datos de la clase
    //Transforma el codigo de str a int
    public getCodigo(): number {
        let str = this.codigo
        let ascii = str.charCodeAt(0)
        return ascii;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getCosto(): number {
        return this.costo;
    }

    public getVenta(): number {
        return this.venta;
    }

    //Funcion para mostrar los datos de los productos almacenados
    public imprimir(): string {
        return "Codigo: " + this.codigo.toString() + " Nombre: " + this.nombre + " Precio Costo: " 
        + this.costo.toString() + " Precio Venta: " + this.venta.toString();
    }

}

class HashTable {
    private size: number;
    private data: Products[];

    constructor (size: number) {
        this.data = new Array(size);
        this.size = size;
    }

    //Se crea la llave la cual llegara a tener el limite de la tabla hash
    private hash(key: number) {
        return key % this.size;

    }

    //Funcion que inseta los productos en base a una llave en este caso el codigo (getCodigo)
    public insert(producto: Products): void {
        let index: number = this.hash(producto.getCodigo());
        while (this.data[index] != null) {
            index = (index + 1) % this.size;
        }
        this.data[index] = producto;
    }

    public search(code: number): Products | null {
        let index: number = this.hash(code);
        let startIndex: number = index;
        while (this.data[index] != null) {
            if (this.data[index]?.getCodigo() == code) {
                return this.data[index];
            }
            index = (index + 1) % this.size;
            if (index == startIndex) break;
        }
        return null;
    }
        
}


//Ingresar los productos que constan de "Codigo" "Nombre" "Costo" "Venta"
let producto1: Products = new Products("A001", "Miguel", 123, 23);
let producto2: Products = new Products("B002", "Miguel", 123, 23);
let producto3: Products = new Products("C003", "Miguel", 123, 23);
let producto4: Products = new Products("D004", "Miguel", 123, 23);
let producto5: Products = new Products("F005", "Miguel", 123, 23);

//Se ingresan los productos a la tabla hash
            //Cambiar tamaño de la tabla a 10
let myProducts: HashTable = new HashTable(5);
myProducts.insert(producto1)
myProducts.insert(producto2)
myProducts.insert(producto3)
myProducts.insert(producto4)
myProducts.insert(producto5)


//Ingresar el Codigo a Buscar y este se transformara para poder encontrarlo
let transformar: string = "B002";
let codigoABuscar = transformar.charCodeAt(0)  
let codigoEncontrado: Products | null = myProducts.search(codigoABuscar);

if (codigoEncontrado != null) {
    console.log(codigoEncontrado.imprimir());
} 
else {
    console.log("Codigo:", codigoABuscar, "no encontrado.");
}

