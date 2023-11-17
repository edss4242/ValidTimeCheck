var btn = document.querySelector("#button")

btn.addEventListener("click", function(event){
    event.preventDefault();

    var RunnerTime = document.querySelector("#main");
    var str = String(RunnerTime.nome.value);


    if(str.length == 13){
        var min = RunnerTime.nome.value.slice(0,2);
        var sec = RunnerTime.nome.value.slice(4,6);
        var ms =  RunnerTime.nome.value.slice(8,11);
    }
    else if(str.length == 9){
        var min = 0
        var sec = RunnerTime.nome.value.slice(0,2);
        var ms =  RunnerTime.nome.value.slice(4,7);
    }
    else if(str.length == 12){
        var min = RunnerTime.nome.value.slice(0,1);
        var sec = RunnerTime.nome.value.slice(3,5);
        var ms =  RunnerTime.nome.value.slice(7,10);
    }
    else if(str.length == 16){
        var min = RunnerTime.nome.value.slice(3,5);
        var sec = RunnerTime.nome.value.slice(7,10);
        var ms =  RunnerTime.nome.value.slice(11,14);
    }
    else{
        alert("Invalid format")
        return;
    }
        

    var valid;
    var calc;

    //convert to seconds
    calc = parseFloat(min)*60+parseFloat(sec)+parseFloat(ms/1000);

    calc = (calc/0.015);
    calc = Math.round(calc*100)/100;

        if(Number.isInteger(calc)){
            valid = true;
            document.getElementById("validade").innerHTML = 'VALID';
            document.getElementById("validade").style.color = "green"
            
        }
            
        else{
            valid = false;
            document.getElementById("validade").innerHTML = 'INVALID';
            document.getElementById("validade").style.color = "red"

        }
        
}
)