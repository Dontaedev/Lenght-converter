const input = document.getElementById('input');
const result = document.getElementById('results');
const inputType = document.getElementById('inputType');
const resultType = document.getElementById('resultType');



input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);




function myResult(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "meter" &&  resultTypeValue === "kilometer"){
        
        result.value = Number(input.value) * 0.001;
    
    }else if(inputTypeValue === "meter" &&  resultTypeValue === "centimeter"){

        result.value = Number(input.value) * 100;

    }else if(inputTypeValue === "meter" &&  resultTypeValue === "meter"){

        result.value = Number(input.value);
    }
    
    
    
    if(inputTypeValue === "kilometer" &&  resultTypeValue === "meter"){
        
        result.value = Number(input.value) * 1000;
    
    }else if(inputTypeValue === "kilometer" &&  resultTypeValue === "centimeter"){

        result.value = Number(input.value) * 100000;

    }else if(inputTypeValue === "kilometer" &&  resultTypeValue === "kilometer"){

        result.value = Number(input.value);
    }


        
    if(inputTypeValue === "centimeter" &&  resultTypeValue === "meter"){
        
        result.value = Number(input.value) * 0.01;
    
    }else if(inputTypeValue === "centimeter" &&  resultTypeValue === "kilometer"){

        result.value = Number(input.value) * 0.00001;

    }else if(inputTypeValue === "centimeter" &&  resultTypeValue === "centimeter"){

        result.value = Number(input.value);
    }


                            // WORKING ON THE MILLIMETER CONVERSION
    
    
    // if(inputTypeValue === "millimeter" &&  resultTypeValue === "meter"){
        
    //     result.value = Number(input.value) * 0.001;
    
    // }else if(inputTypeValue === "millimeter" &&  resultTypeValue === "kilometer"){

    //     result.value = Number(input.value) * 0.00001;

    // }else if(inputTypeValue === "millimeter" &&  resultTypeValue === "centimeter"){

    //     result.value = Number(input.value);
    // }

}
