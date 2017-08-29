
const aritGeo = (arr) =>
{
    let arrayType = -1;
    if (arr.length <= 1) return true;

    let secondNumber = arr[1], firstNumber = secondNumber/arr[0], i;
    for (i = 2; i < arr.length; ++i) {
        if ((secondNumber *= firstNumber) == arr[i]){
            arrayType = "Geometric";
        }
        else{
            arrayType = -1;
            break;
        }
    }

    if (arrayType == "Geometric")
        return arrayType;


    secondNumber = arr[1], checkarith = secondNumber - arr[0], i;
    for (i = 2; i < arr.length; ++i) {
        if ((secondNumber += checkarith) == arr[i]){
            arrayType = "Arithmetic";
        }
        else {
            arrayType = -1;
            break;
        }
    }
    return arrayType;
}
module.exports={
	aritGeo: aritGeo
}