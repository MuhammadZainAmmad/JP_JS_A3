function getNumber(num){
    var result = document.getElementById("result");
    result.value+=num;
}

function evalResult(){
    var result = document.getElementById('result');
    resultValue = result.value;
    for(var i=0;i<resultValue.length;i++){
        temp =resultValue.slice(i,i+2)
        if(temp=='++' || temp=='--' || temp=='**' || temp=='//' ){
            alert('No double operator')
            result.value =''
            return       
        }        
    }
    result.value = eval(resultValue);
}

function clearResult(){
    var result = document.getElementById('result');
    result.value='';
}