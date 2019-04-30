var zero=document.getElementById('0');
var one=document.getElementById('1');
var two=document.getElementById('2');
var three=document.getElementById('3');
var four=document.getElementById('4');
var five=document.getElementById('5');
var six=document.getElementById('6');
var seven=document.getElementById('7');
var eight=document.getElementById('8');
var nine=document.getElementById('9');
var dot=document.getElementById('.');
var divide=document.getElementById('/');
var multiply=document.getElementById('*');
var add=document.getElementById('+');
var subtract = document.getElementById('-');
var modulus=document.getElementById('%');
var result=document.getElementById('=');
var clear=document.getElementById('clear');
var input=document.getElementById('input');
var change=document.getElementById('change');
var firstHalf = "";
var final=0;
var operator= '+';
var string="";

subtract.addEventListener('click', function(){
    if(input.value != ""){
        firstHalf = input.value;
        input.value = "";
        operator = subtract;
    }else{
        input.value+= '-';
    }
});

zero.addEventListener('click',function(){
	input.value +=zero.value;
});

one.addEventListener('click',function(){
	input.value +=one.value;
});

two.addEventListener('click',function(){
	input.value +=two.value;
});

three.addEventListener('click',function(){
	input.value +=three.value;
});

four.addEventListener('click',function(){
	input.value +=four.value;
});

five.addEventListener('click',function(){
	input.value +=five.value;
});

six.addEventListener('click',function(){
	input.value +=six.value;
});

seven.addEventListener('click',function(){
	input.value +=seven.value;
});

eight.addEventListener('click',function(){
	input.value +=eight.value;
});

nine.addEventListener('click',function(){
	input.value +=nine.value;
});

add.addEventListener('click', function(){
    firstHalf=input.value;
	input.value=null;
	operator= add;
});

multiply.addEventListener('click', function(){
    firstHalf=input.value;
	input.value=null;
	operator= multiply;
});

divide.addEventListener('click', function(){
    firstHalf=input.value;
	input.value=null;
	operator= divide;
});

modulus.addEventListener('click', function(){
    firstHalf=input.value;
	input.value=null;
	operator= modulus;
});

clear.addEventListener('click', function(){
    input.value=null;
});

dot.addEventListener('click',function(){
	input.value +=dot.value;
});

change.addEventListener('click',function(){
	string=input.value;
	var FirstChar = string.charAt(0);
	if(FirstChar=='-'){
		string=string.substring(1,string.length);
		input.value=string;
	}
	else{
		string='-'+string;
		input.value=string;
	}
})

result.addEventListener('click',function(){
	final = eval (firstHalf+""+operator.value+""+input.value);
	if (final=='Infinity') {
		input.value='ERROR'
	}else{
	input.value=final;
}
});