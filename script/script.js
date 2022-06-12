

function calcular(){
    let n1 = document.querySelector("#n1").value;
    let n2 = document.querySelector("#n2").value;
    let opt = document.querySelector("#opt").value;
    if(n1 == ""){
        alert('Digite algum valor')
    }else{

    
        if (opt == "+"){
            let result = parseFloat(n1) + parseFloat(n2);
            alert(result);
        } else if (opt == "-"){
            let result = parseFloat(n1) - parseFloat(n2);
            alert(result);
        
        } else if(opt == "*"){
            let result = parseFloat(n1) * parseFloat(n2);
            alert(result);
        }else if(opt == "/"){
            if(n2 == 0){
                alert("Indeterminação")
            }else{
                let result = parseFloat(n1) / parseFloat(n2);
                alert(result)
            }
            
        }
    }

};