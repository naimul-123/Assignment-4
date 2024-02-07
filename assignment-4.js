function calculateMoney(ticketSale){
    if(typeof ticketSale !== "number" || ticketSale<0){
        return "Please give a positive number as input.";
    }
    else{
        const gardSalary = 500;
        const stuffBill= 8*50;
        const totalIncome = ticketSale*120;
        return totalIncome - (gardSalary+stuffBill);
    }
}

function checkName(name){
    if(typeof name !=="string"){
        return "invalid";
    }
    else{
        const lastLetter =name.trim()[name.length-1].toLowerCase();
        const matchLetters= ["a", "y", "i", "e", "o", "u", "w"]
        if(matchLetters.includes(lastLetter)){
            return "Good Name";
        }
        else{
            return "Bad Name";
        }

    }
}


function deleteInvalids(Arr){
 if(!Array.isArray(Arr)){
    return "Input must be an array";
 }
 else{
    const newArray = [];
    for(n of Arr){
        if(typeof n === "number" && !isNaN(n)){
            newArray.push(n);
        }
    }

    return newArray;
 }
}

function password(obj){
    if(typeof obj !== "object" || obj.name=== undefined || obj.name.trim() === ""  || obj.birthYear === undefined || obj.birthYear === "" || obj.siteName===undefined ||obj.siteName.trim()==="" || obj.birthYear.toString().trim().length!== 4){
        return "invalid";
    }

    else{
        
        const site = obj.siteName.trim()[0].toUpperCase() + obj.siteName.trim().slice(1)
        return `${site}#${obj.name.trim()}@${obj.birthYear.toString().trim()}`;       
    }
}


function monthlySavings(allPayments, livingCost){
        let totalIncome = 0;
        if(!Array.isArray(allPayments) || typeof livingCost !=="number"){
            return "invalid input"
        }
        else{
                for(n of allPayments ){
                    if(typeof n !== "number"){
                        return "All input must be a number";
                        
                    }
                    else{
                        if(n>=3000){
                            totalIncome+=n*0.8;
                        }
                        else{
                            totalIncome+=n;
                        }  
                    }
                }  
            }

        const savings = totalIncome - livingCost;
        if(savings>=0){
            return savings;
        }
        else{
            return "earn more";
        }
}
