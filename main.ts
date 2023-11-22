class GenericsValue<T> {
    value: T;

    constructor(arg: T) {
        this.value = arg;
    }

    getValue(): T {
        return this.value;
    }
}

let genericsValueNumber = new GenericsValue<number>(1);
console.log(genericsValueNumber.getValue());  

let genericsValueString = new GenericsValue<string>("Hello, omaera");
console.log(genericsValueString.getValue());  
