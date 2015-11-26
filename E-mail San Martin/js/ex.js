/*Example file*/
console.log("hola mundo");
var name = $("#nameField").val();

/*$(document).ready(function() {
	
});*/
$("button").click(function(){
	if($('#nameField').val() === " "){
		console.log("Vacio");
	}
	else{
		alert("Bienvenido: " + name);
	};
});

console.log("hola mundo"); 

/* $scope.sendTheMail = function() {
	// key genera al momento de registrar tu aoo en Mandrill esta no la copies registra tu app y ya te la dan 
	var apiKey = 'ZFvzAupGpOZYwWHvzer_Eg';
	//OBJETO MADRIL QUE RECIBE DE PARAMETRO TU KEY
	var m = new mandrill.Mandrill(apiKey);
	// campos del formulario 
	var country = $("#countryField").val(); 
	var name = $("#nameField").val(); 
	var title = $("#titleField").val();
	var company = $("#companyField").val();
	var email = $("#emailField").val();
	var telephone = $("#telephoneField").val();
	var city = $("#cityField").val();
	var kindProffesional =  $("#kindProffesional").val();
	var messageString = $("#messageField").val();
	$("#nameField").val("");
	$("#titleField").val("");
	$("#companyField").val("");
	$("#emailField").val("");
	$("#telephoneField").val("");
	$("#cityField").val("");
	$("#kindProffesional").val("");
	$("#messageField").val("");
	$("#countryField").val("");
	console.log(name); 
	//datos que se escriben en mensaje del correo
	var messageBody = "Name: " + name + "\nTitle: " + title  + "\nCompany: " + company + "\nEmail: "+ email + "\nTelephone: " +telephone + "\nCountry:  " + country + "\nCity:  " + city + "\nWhat kind of proffesional are you loking for? " + kindProffesional  +"\nTechnical needs: "+messageString;
	Json donde  se guardan los   parametros a enviar donde : from_email es el correo que es el va a parecer q envio el mail,
	to es a quien se lo vas a enviar ,subject es el titulo del correo y en text mandas todos los datos de tus campos };*/