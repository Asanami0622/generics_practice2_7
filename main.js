var GenericsValue = /** @class */ (function () {
    function GenericsValue(arg) {
        this.value = arg;
    }
    GenericsValue.prototype.getValue = function () {
        return this.value;
    };
    return GenericsValue;
}());
var genericsValueNumber = new GenericsValue(1);
console.log(genericsValueNumber.getValue());
var genericsValueString = new GenericsValue("Hello, omaera");
console.log(genericsValueString.getValue());
