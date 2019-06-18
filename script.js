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

	var nomeArquivo = [], respStringInt;

	for (var i = 0; i < e.target.files.length; i++) {
		nomeArquivo[i] = e.target.files[i].name;
	} 

	(e.target.files.length > 1)? respStringInt = e.target.files.length + " arquivo(s)" : respStringInt = nomeArquivo.join(", ");

	document.querySelector('label[for="arquivo"]').innerText = respStringInt;

	var size_arquivos = 0;

	if(e.target.files != null && e.target.files.length != 0){

		//VERIFICA O TAMANHO E A EXTENSÃO DO ARQUIVO.
		var arquivo = [];
		var type = e.target.files;
		for(i = 0; i < e.target.files.length; i++) {

			if(type[i].type == "application/pdf" || type[i].type == "image/jpeg" || type[i].type == "image/png" ){

				size_arquivos += e.target.files[i].size;

				data.append("arquivo[]", e.target.files[i]);

				console.log("indice: ",i);

			} else {
				alert('Tipo de arquivo não aceito!');
				data.delete('arquivo[]');
			}
		}
	}


	var max_size = 10000000; //10000000 = 10MB

	// console.log('Tam Total: ',size_arquivos);
	if(size_arquivos > max_size) {
		alert('Tamanho dos arquivos somados não poderá ultrapassar de 10MB.');
		data.delete('arquivo[]');
		return false;

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
