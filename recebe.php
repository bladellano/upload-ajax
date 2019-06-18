<?php 

print_r($_POST);
print_r($_FILES);

if($_FILES):

	$ext_type = array('gif','jpg','jpe','jpeg','png');
	$arquivo = $_FILES['arquivo'];

	for ($i = 0; $i < count($_FILES['arquivo']['name']) ; $i++) { 
		if(move_uploaded_file($arquivo['tmp_name'][$i], "arquivos/".$arquivo['name'][$i])){
			echo "Imagem enviada com sucesso!\n\r";
		} else {
			echo "Erro ao enviar a imagem.\n\r";
		}
	}

	
 
endif;