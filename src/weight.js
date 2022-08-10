const input = document.getElementById('input');
const result = document.getElementById('results');
const inputType = document.getElementById('inputType');
const resultType = document.getElementById('resultType');

            // EDIT THE HTML TO FIT THE WEIGHT REQUIREMENTS 


document.getElementById("inputOptionOne").innerHTML = "Gram";
document.getElementById("inputOptionTwo").innerHTML = "Kilogram";
document.getElementById("inputOptionThree").innerHTML = "Pound";
document.getElementById("inputOptionFour").innerHTML = "Tonne";



document.getElementById("resultOptionOne").innerHTML = "Gram";
document.getElementById("resultOptionTwo").innerHTML = "Kilogram";
document.getElementById("resultOptionThree").innerHTML = "Pound";
document.getElementById("resultOptionFour").innerHTML = "Tonne";

                    /// EDIT THE HTML VALUES
document.getElementById("inputOptionOne").value = "gram";
document.getElementById("inputOptionTwo").value = "kilogram";
document.getElementById("inputOptionThree").value = "pound";
document.getElementById("inputOptionFour").value = "tonne";


document.getElementById("resultOptionOne").value = "gram";
document.getElementById("resultOptionTwo").value = "kilogram";
document.getElementById("resultOptionThree").value = "pound";
document.getElementById("resultOptionFour").value = "tonne";


                    /// LISTEN FOR CLICKS
input.addEventListener("keyup", myWeightResult);
inputType.addEventListener("change", myWeightResult);
resultType.addEventListener("change", myWeightResult);





function myWeightResult(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

                /////     GRAM

    if(inputTypeValue === "gram" &&  resultTypeValue === "kilogram"){
        
        result.value = Number(input.value) * 0.001;

    }else if(inputTypeValue === "gram" &&  resultTypeValue === "pound"){

        result.value = Number(input.value) * 0.00220462;

    }else if(inputTypeValue === "gram" &&  resultTypeValue === "tonne"){

        result.value = Number(input.value) * 0.000001;

    }else if(inputTypeValue === "gram" &&  resultTypeValue === "gram"){

        result.value = Number(input.value);
    }


                        //// KILOGRAMS

    if(inputTypeValue === "kilogram" &&  resultTypeValue === "gram"){
        
        result.value = Number(input.value) * 1000;

    }else if(inputTypeValue === "kilogram" &&  resultTypeValue === "pound"){

        result.value = Number(input.value) * 2.20462;

    }else if(inputTypeValue === "kilogram" &&  resultTypeValue === "tonne"){

        result.value = Number(input.value) * 0.001;

    }else if(inputTypeValue === "kilogram" &&  resultTypeValue === "kilogram"){

        result.value = Number(input.value);
    }


                    ///     POUNDS


    if(inputTypeValue === "pound" &&  resultTypeValue === "gram"){

        result.value = Number(input.value) * 453.592;

    }else if(inputTypeValue === "pound" &&  resultTypeValue === "kilogram"){

        result.value = Number(input.value) * 0.453592;

    }else if(inputTypeValue === "pound" &&  resultTypeValue === "tonne"){

        result.value = Number(input.value) * 0.000453592;

    }else if(inputTypeValue === "pound" &&  resultTypeValue === "pound"){

        result.value = Number(input.value);
    }


                                 ///// TONNE

    if(inputTypeValue === "tonne" &&  resultTypeValue === "gram"){

        result.value = Number(input.value) * 1000000;

    }else if(inputTypeValue === "tonne" &&  resultTypeValue === "kilogram"){

        result.value = Number(input.value) * 1000;

    }else if(inputTypeValue === "tonne" &&  resultTypeValue === "pound"){

        result.value = Number(input.value) * 2204.62;

    }else if(inputTypeValue === "tonne" &&  resultTypeValue === "tonne"){

        result.value = Number(input.value);
    }
}

export default function myWeightResult();