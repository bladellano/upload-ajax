/*document.getElementById("arquivo").onchange = function(e){

if(e.target.files != null && e.target.files.length != 0){
	var arquivo = e.target.files[0];
	var fd = new FormData();
	fd.append("arquivo",arquivo);
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState===4 && xmlhttp.status === 200)
			alert(xmlhttp.responseText);
	};

	xmlhttp.open("POST","recebe.php",true);
	xmlhttp.send(fd);
}
};

*/


var form = document.getElementById('two');
data = new FormData();

document.getElementById("arquivo").onchange = function(e) {  

	if(e.target.files != null && e.target.files.length != 0){

		var arquivo = [];

		for(i = 0; i < e.target.files.length; i++) {

			data.append("arquivo[]", e.target.files[i]);

			console.log(i);
		}
	}
	
};

document.querySelector('#btn-submit').addEventListener('click',function(e){
	e.preventDefault();

	var formCompleto = document.getElementById('two');

	for(i = 0; i < formCompleto.length; i++) {
		var campo = formCompleto[i].getAttribute('name');
		var valor = formCompleto[i].value;
		
		if(campo != 0 && campo != null && campo != "arquivo[]"){
			data.append(campo, valor);
		}

	}

	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState===4 && xmlhttp.status === 200)
			console.log(xmlhttp.responseText);
	};

	xmlhttp.open("POST","recebe.php",true);
	xmlhttp.send(data);
});
