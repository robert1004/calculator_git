$(function(){

	var currentText = '';
	var operater = '';
	var tmpvalue = '';

$('#btn1').on('click', function () {
	if(currentText == '0'){
		currentText ='';
	}
	currentText = currentText + '1';	
	render();
});

$('#btn2').on('click', function () {
	if(currentText == '0'){
		currentText ='';
	}
	currentText = currentText + '2';
	render();
});

$('#btn3').on('click', function () {
	if(currentText == '0'){
		currentText ='';
	}
	currentText = currentText + '3';
	render();
});

$('#btn4').on('click', function () {
	if(currentText == '0'){
		currentText ='';
	}
	currentText = currentText + '4';
	render();
});

$('#btn5').on('click', function () {
	if(currentText == '0'){
		currentText ='';
	}
	currentText = currentText + '5';
	render();
});

$('#btn6').on('click', function () {
	if(currentText == '0'){
		currentText ='';
	}
	currentText = currentText + '6';
	render();
});

$('#btn7').on('click', function () {
	if(currentText == '0'){
		currentText ='';
	}
	currentText = currentText + '7';
	render();
});

$('#btn8').on('click', function () {
	if(currentText == '0'){
		currentText ='';
	}
	currentText = currentText + '8';
	render();
});

$('#btn9').on('click', function () {
	if(currentText == '0'){
		currentText ='';
	}
	currentText = currentText + '9';
	render();
});

$('#btn0').on('click', function () {
	if(currentText == '0'){
		currentText ='';
	}
	currentText = currentText + '0';
	render();
});

$('#btnCLEAR').on('click', function () {
	currentText = '0';
	render();
});

$('#btnADD').on('click', function () {
	operater = 'ADD';
	savedpreviousvalue();
});

$('#btnMINUS').on('click', function () {
	operater = 'MINUS';
	savedpreviousvalue();
});

$('#btnMULTIPLY').on('click', function () {
	operater = 'MULTIPLY';
	savedpreviousvalue();
});

$('#btnDIVIDE').on('click', function () {
	operater = 'DIVIDE';
	savedpreviousvalue();
});
//parseFloat讀字串 返回數字
$('#btnEQUAL').on('click', function() {

        $('#message').text( calculate(tmpvalue,currentText,operater) );
		operater = '';

    });

function  render () {
	$('#message').text(currentText);
}

function savedpreviousvalue () {
	tmpvalue = currentText;
	currentText = '';
}
//switch是一個可以基於不同狀況去處理的一個函示
function calculate(number1, number2, operater){
var result;
		num1 = parseInt(number1);
		num2 = parseInt(number2);
		switch (operater){
			case 'ADD':
				result=num1+num2;
				break;
			case 'MINUS':
			    result=num1-num2;
			    break;
			case 'MULTIPLY':
			    result=num1*num2;
			    break;
            case 'DIVIDE':
			    result=num1/num2;
			    break;
			default:
				return;
				break;
		}
		currentText = result;
		temp='';


		return result;

	}

});