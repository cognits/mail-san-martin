var EmailApp = angular.module('EmailApp', []);
EmailApp.controller('formController', function($scope,$http){
console.log("Ejecutando..")
$scope.sendTheMail = function() {
	console.log("Estoy Dentro...")
	var info_stors = {
	    "13 calle Zona Viva": [
	        {
	            "telephone": "2420-9916",
	            "address": "13 Calle y 2ª. Ave. Esquina Z.10, Plaza Rosa.",
	            "schedule": "de Lunes y Martes 6:00 a.m. a 8:30 p.m., Miércoles a Viernes 6:00 a.m. a 10:00 p.m. y Domingos 7:00 a.m. a 7:00 p.m.",
	        }
	    ],
	    "9a Calle Zona 14": [
	        {
	            "telephone": "2420-9907",
	            "address": "9 calle 7-10 zona 14 Ciudad de Guatemala.",
	            "schedule": "de 6:00 a.m. a 10:00 p.m.",
	        }
	    ],
	    "Av. Petapa": [
	        {
	            "telephone": "2420-9930",
	            "address": "Ave Petapa 50-75 zona 12, Local 1, Plaza Canadá.",
	            "schedule": "de 7:00 a.m. a 10:00 p.m.",
	        }
	    ],
	    "C.C. Aguilar Batres": [
	        {
	            "telephone": "2420-9931",
	            "address": "13 calle 0-35 zona 11 Centro Comercial Aguilar Batres.",
	            "schedule": "de 7:00 a.m. a 8:00 p.m.",
	        }
	    ],
	    "C.C. Arkadia Shopping": [
	        {
	            "telephone": "2420-9933",
	            "address": "Boulevard Los Próceres 18 calle 26-21, zona 10 Centro Comercial Arkadia Shopping.",
	            "schedule": "de 8:00 a.m. a 9:00 p.m.",
	        }
	    ],
	    "C.C. Gran Vía": [
	        {
	            "telephone": "2420-9902",
	            "address": "Calz. Roosevelt 28-09 Z.7 Centro Comercial Gran Vía Local 30.",
	            "schedule": "de 7:00 a.m. a 8:00 p.m.",
	        }
	    ],
	    "C.C. Martí 7": [
	        {
	            "telephone": "2420-9901",
	            "address": "Calle Martì 7-20 Z.2 Local No.8.",
	            "schedule": "de 7:00 a.m. a 8:30 p.m.",
	        }
	    ],
	    "C.C. Metrocentro": [
	        {
	            "telephone": "2420-9910",
	            "address": "0 Calle 16-20 Zona 4 de Villa Nueva Centro Comercial Metrocentro, Locales: 185-188.",
	            "schedule": "de 7:00 a.m. a 9:00 p.m.",
	        }
	    ],
	    "C.C. Miraflores": [
	        {
	            "telephone": "2420-9913",
	            "address": "21 Avenida 4-32 Zona 11 Centro Comercial Miraflores locales 2 y 3.",
	            "schedule": "de 7:00 a.m. a 10:00 p.m.",
	        }
	    ],
	    "C.C. Montúfar": [
	        {
	            "telephone": "2420-9919",
	            "address": "12 Calle 0-93 Zona 9 Centro Comercial Montúfar.",
	            "schedule": "de Lunes a Sábado 7:00 a.m. a 8:30 p.m. y Domingos 8:00 a.m. a 8:00 p.m.",
	        }
	    ],
	    "C.C. Plaza Maderos": [
	        {
	            "telephone": "2420-9935",
	            "address": "Km 21.7 Carretera a El Salvador, Z.3 de Villa Canales.",
	            "schedule": "de 7:00 a.m. a 9:00 p.m.",
	        }
	    ],
	    "C.C. Portales": [
	        {
	            "telephone": "2420-9925",
	            "address": "Km 4.5 Carretera al Atlántico zona 17 C.C. Portales.",
	            "schedule": "de 7:00 a.m. a 10:00 p.m.",
	        }
	    ],
	    "Col. El Maestro, Vista Hermosa": [
	        {
	            "telephone": "2420-9914",
	            "address": "2a. Calle 17-54 zona 15, Colonia El Maestro Local No.2 y 3.",
	            "schedule": "de Lunes a Sábado 6:00 a.m. a 8:00 p.m. y Domingo de 7:00 a.m. a 6:00 p.m.",
	        }
	    ],
	    "Condado Concepción": [
	        {
	            "telephone": "2420-9905",
	            "address": "Km.15.5 Carr. a El Salvador Condado Concepción.",
	            "schedule": "de Lunes a Miércoles 6:00 a.m. a 8:30 p.m. y Jueves a Sábado 6:00 a.m. a 10:00 p.m.",
	        }
	    ],
	    "Condado Santa Amelia": [
	        {
	            "telephone": "2420-9908",
	            "address": "Boulevard Centro Médico Militar 12-05 zona 17 Centro Comercial Plaza Santa Amelia, Locales 8 y 9.",
	            "schedule": "de 7:00 a.m. a 9:00 p.m.",
	        }
	    ],
	    "Escala Carretera a El Salvador": [
	        {
	            "telephone": "2420-9912",
	            "address": "Km. 14.5 Carret. A El Salvador Sta. Catarina Pinula, Puerta Parada.",
	            "schedule": "de Domingo a Miércoles 7:00 a.m. a 9:00 p.m. y Jueves a Sábado 7:00 a.m. a 10:00 p.m.",
	        }
	    ],
	    "Eskala Roosevelt": [
	        {
	            "telephone": "2420-9923",
	            "address": "Km.13.8 Calzada Roosvelt, Z.3 de Mixco Locales: L-143 y L-144.",
	            "schedule": "de Domingo a Jueves de 8:00 a.m. a 9:00 p.m. y de Viernes a Sábado de 8:00 a.m. a 10:00 p.m.",
	        }
	    ],
	    "Las Puertas de San Lucas": [
	        {
	            "telephone": "2420-9928",
	            "address": "Km 29.5 Carretera Interamericana San Lucas Sacatepequez Centro Comercial Las Puertas Local C.",
	            "schedule": "de 6:00 a.m. a 10:00 p.m.",
	        }
	    ],
	    "Minuto Muxbal": [
	        {
	            "telephone": "2420-9927",
	            "address": "Km. 13.5 carretera antigua a El Salvador, Finca Los Tilos zona 4, Sta Catarina Pinula.",
	            "schedule": "de 7:00 a.m. a 9:00 p.m.",
	        }
	    ],
	    "Pacific Center": [
	        {
	            "telephone": "2420-9917",
	            "address": "Calzada Aguilar Batres 32-00 Zona 11 Centro Comercial Pacific Center.",
	            "schedule": "de Lunes a Sábado 8:00 a.m. a 9:00 p.m. y Domingos 8:00 a.m. a 8:00 p.m.",
	        }
	    ],
	    "Paseo San Sebastián": [
	        {
	            "telephone": "2420-9920",
	            "address": "Km. 14.1 Carr. A El Salvador Antigua Finca Las Victorias, Aldea Puerta Parada z.8, Sta. Catarina Pinula.",
	            "schedule": "de 7:00 a.m. a 10:00 p.m.",
	        }
	    ],
	    "Plaza Ferco": [
	        {
	            "telephone": "2420-9903",
	            "address": "20 Calle 12-84 Zona 10 , Locales 4 y 5.",
	            "schedule": "de Lunes a Sábado 6:00 a.m. a 8:00 p.m. y Domingo de 7:00 a.m. a 7:00 p.m.",
	        }
	    ],
	    "Plaza San Carlos, El Encinal": [
	        {
	            "telephone": "2420-9922",
	            "address": "Calle Los Pinos 18-67 Z.7 Col. San Carlos, Plaza San Carlos El Encinal.",
	            "schedule": "de 7:00 a.m. a 8:00 p.m.",
	        }
	    ],
	    "Plaza San Cristóbal": [
	        {
	            "telephone": "2420-9911",
	            "address": "Zona 8 de Mixco, Centro Comercial Plaza San Cristóbal Local 132",
	            "schedule": "de 7:00 a.m. a 8:30 p.m.",
	        }
	    ],
	    "Plaza San Nicolas": [
	        {
	            "telephone": "2420-9918",
	            "address": "41 Ave. 3-10, Z.4 de Mixco Bosques de Sn Nicolás Centro Comercial Plaza San Nicolás, Local 108 y 109.",
	            "schedule": "de 7:30 a.m. a 8:30 p.m.",
	        }
	    ],
	    "Plaza Subway z.13": [
	        {
	            "telephone": "2420-9924",
	            "address": "Avenida Las Américas 15-00 Z. 13, Plaza Subway, Locales 2 y 3.",
	            "schedule": "de 6:00 a.m. a 8:00 p.m.",
	        }
	    ],
	    "Plaza Varietá Cayalá": [
	        {
	            "telephone": "2420-9926",
	            "address": "22 calle 03-05 lote 3 z. 16 Boulevard Rafael Landívar Centro Comercial Plaza Varietá local 12.",
	            "schedule": "-",
	        }
	    ],
	    "Pradera Xela": [
	        {
	            "telephone": "2420-9909",
	            "address": "Avenida Las Amèricas 7-04 Zona 3, Quetzaltenango, La Plaza, Pradera Xela.",
	            "schedule": "de 7:00 a.m. a 10:00 p.m.",
	        }
	    ],
	    "Pradera z.10": [
	        {
	            "telephone": "2420-9904",
	            "address": "Centro Comercial La Pradera z. 10, Locales 4 y 5.",
	            "schedule": "de 7:00 a.m. a 10:00 p.m.",
	        }
	    ],
	    "San Cristóbal Mix": [
	        {
	            "telephone": "2420-9906",
	            "address": "5a. Avenida 3-05 Sector A-3 zona 8 de Mixco, San Cristóbal Local No.28.",
	            "schedule": "de Domingo a Miércoles 7:00 a.m. a 9:00 p.m. y Jueves a Sábado 7:00 a.m. a 10:00 p.m.",
	        }
	    ],
	    "Vía Majadas": [
	        {
	            "telephone": "2420-9921",
	            "address": "Parque Comercial Majadas, zona 11.",
	            "schedule": "de Domingo a Miércoles 6:00 a.m. a 8:30 p.m. y Jueves a Sábado 6:00 a.m. a 10:00 p.m.",
	        }
	    ],
	    "Vista Hermosa I": [
	        {
	            "telephone": "2420-9929",
	            "address": "21 av 2-04 z.15 Vista Hermosa I",
	            "schedule": "de 6:00 a.m. a 10:00 p.m.",
	        }
	    ],
	    "Xela Minerva": [
	        {
	            "telephone": "2420-9932",
	            "address": "23 ave 4-14 z.3 Quetzaltenango.",
	            "schedule": "de 7:00 a.m. a 10:00 p.m.",
	        }
	    ]
	};+
	 0

	// key genera al momento de registrar tu aoo en Mandrill esta no la copies registra tu app y ya te la dan 
	var apiKey = '2ZMRx5Wr9KOKm3hCKTfc4Q';
	//OBJETO MADRIL QUE RECIBE DE PARAMETRO TU KEY
	var m = new mandrill.Mandrill(apiKey);
	// campos del formulario 
	var country = $("#countryField").val();
	var from = $("#fromField").val(); 
	var to = $("#toField").val();
	var email = $("#emailField").val();
	var occasion = $("#occasionField").val();
	var messege = $("#messegeField").val();
	var store = $("#storeField").val();
	var date = $("#dateField").val();

	var address = info_stors[store][0]["address"];
	var telephone = info_stors[store][0]["telephone"];
	var schedule = info_stors[store][0]["schedule"];

	var company = "San Martin"
	var title = $("#titleField").val();
	var city = $("#cityField").val();
	var kindProffesional =  $("#kindProffesional").val();
	var messageString = $("#messageField").val();


	document.messege.style.fontSize="30px"; 
	//document.getElementById('messegeField').style.color = 'red';
	console.log(messege);

	$("#fromField").val("");
	$("#toField").val("");
	$("#emailField").val("");
	$("#occasionField").val("Occasion");
	$("#messegeField").val("");
	$("#storeField").val("Store");
	$("#dateField").val("");

	$("#titleField").val("");
	$("#companyField").val("");
	
	$("#telephoneField").val("");
	$("#cityField").val("");
	$("#kindProffesional").val("");
	$("#messageField").val("");
	$("#countryField").val("");
	console.log(from);
	//console.log(info_stors);
	console.log(info_stors[store][0]["telephone"]);

	if (occasion === "Birthday"){
		occasion = "Cumpleaños";
	}
	else if(occasion === "Aniversary"){
		occasion = "Aniversario";
	}
	else if(occasion === "Holiday"){
		occasion = "Fiesta";
	}
	else if(occasion === "Special Occasion"){
		occasion = "Ocasión especial";
	}
	//datos que se escriben en mensaje del correo
	//var messageBody = "Hola "+ to +"\nDe: " + from + "\nPara: " + to  + "\nCompanía: " + company + "\nDirección: " + address + "\nHorario: " + schedule + "\nE-mail: "+ email + "\nTelefono: " + telephone +"\nOcasión: "+occasion +"\nMensaje: "+ messege +"\nTienda: "+ store +"\nFecha: "+date+ "\nPaís:  " + country + "\nCiudad:  " + city + "\nWhat kind of proffesional are you loking for? " + kindProffesional  +"\nTechnical needs: "+messageString;
	/*Json donde  se guardan los   parametros a enviar donde : from_email es el correo que es el va a parecer q envio el mail,
	to es a quien se lo vas a enviar ,subject es el titulo del correo y en text mandas todos los datos de tus campos*/
	var messageBody = "Hola " + to + '!\n\nTe damos un cordial saludo de parte de Panaderia San Martin.\n\nPara nosotros es un gusto felicitarle y notificarle que ' + from + ' le manda un saludo por su '+ occasion +', tambien desea transmitirle el siguiente mensaje: \n\n"' + messege +'."\n\nY te ha mandado un obsequio a traves de nuestras tiendas online, puedes pasar a recogerlo el ' + date + ' en nuestra tienda \n'+ store +" ubicada en: "+address+" Nuestro horario de atencion es "+ schedule +" si tienes alguna duda por favor comunicate al número "+ telephone +" para nosotros será un gusto atenderte.";

	var params = {
		"message": {
			"from_email":"kherrera16@gmail.com",
			"to":[{"email":email}],
			"subject": "Ordering Information",
			"text": messageBody
		}
	};

	/* Esta es la parte donde envias correos usando el metodo send del objeto mandril 
		aca en este caso es m 
	*/
	m.messages.send(params, function(res) {
		console.log(JSON.stringify(res));
	}, function(err) {
		console.log(JSON.stringify(err));
	});
		console.log("fin ejecucion");
		alert("Send Messege");
	};
});
