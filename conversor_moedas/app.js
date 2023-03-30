
window.onload = function() {
    getDollarPrice();
    getEuroPrice();
    document.getElementById("resultado_euro").innerHTML = "R$ 0.00";
    document.getElementById("resultado_dolar").innerHTML = "R$ 0.00";
};


async function getDollarPrice() {
    const resposta = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
    const corpo = await resposta.json();
    var valor_dolar = parseFloat(corpo.USDBRL.ask).toFixed(2);
    //console.log(corpo);
    document.getElementById("dolar").innerHTML ="R$ "+ valor_dolar + " x "; 
    return valor_dolar;
}
setInterval(getDollarPrice, 3000);

async function getEuroPrice() {
    const resposta = await fetch('https://economia.awesomeapi.com.br/last/EUR-BRL');
    const corpo = await resposta.json();
    var valor_euro = parseFloat(corpo.EURBRL.ask).toFixed(2);
    //console.log(corpo);
    document.getElementById("euro").innerHTML ="R$ "+ valor_euro + " x ";
    return valor_euro;
}
setInterval(getEuroPrice, 3000);


async function multiplica(func, input, resultado_final){
    const dollarPrice = await func;
    let input_dolar = input;
    
    let resultado = dollarPrice*input_dolar;
    return "R$ "+resultado.toFixed(2);
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("input_dolar").onchange = function() {  
        multiplica(getDollarPrice(), document.getElementById("input_dolar").value, document.getElementById("resultado_dolar").innerHTML).then(resultado => {
            document.getElementById("resultado_dolar").innerHTML = resultado;
          }).catch(error => {
            console.error(error);
        });
        
    };

    
    
    document.getElementById("input_euro").onchange = function() {    
        multiplica(getEuroPrice(), document.getElementById("input_euro").value, document.getElementById("resultado_euro").innerHTML).then(resultado => {
            document.getElementById("resultado_euro").innerHTML = resultado;
          }).catch(error => {
            console.error(error);
        });
        
    };
    
});




/*async function multiplica(){
    const dollarPrice = await getDollarPrice();
    let input_dolar = parseFloat(document.getElementById("input_dolar").value);
    if (isNaN(input_dolar) || input_dolar == null || input_dolar === "") { // verifique se o valor de num1 é NaN, null ou uma string vazia
        document.getElementById("resultado_dolar").innerHTML = "";
        return;
    }
    let resultado = dollarPrice*input_dolar;
    document.getElementById("resultado_dolar").innerHTML = "R$ "+resultado.toFixed(2);
}
*/