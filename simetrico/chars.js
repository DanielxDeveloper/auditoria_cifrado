class alfabeth{
    constructor(){
        this.chars = this.get_chain();
        this.Clength= this.get_lenght();
    }

    get_chain(){
        let space = " ";
        let upper = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        let lower = 'abcdefghijklmnñopqrstuvwxyz';
        let symbols = '¡!@#$%^&*()-_=+{[}]\|;:\'",<.>/?`~¿';

        this.chain = space+upper+lower+symbols;
        return this.chain;
    }

    get_lenght(){
       return this.chain.length
    }
}

// cadena = new alfabeth()
// console.log(cadena.chars);
// console.log(cadena.Clength);
