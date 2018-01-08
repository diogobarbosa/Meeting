
function exibirAba(idAbaAserExibida){
	$(".aba").css("display", "none");
	$("#"+idAbaAserExibida).css("display", "block");

	//Carrega os selects do material design caso a tela possua.
	$('select').material_select();
}

function logarUsuario(){
	$("#header_login").css("display", "none");
	$("#header_logado").css("display", "block");
	$("#footer_logado").css("display", "block");

	exibirAba("aba_explorar");

    //Ativa o dropdown de usuário logado, presente no header após o login.
    $('.dropdown-button').dropdown({
          inDuration: 400,
          outDuration: 300,
          belowOrigin: true, // Displays dropdown below the button
          alignment: 'right' // Displays dropdown with edge aligned to the left of button
        }
    );
}

function deslogarUsuario(){
	$("#header_logado").css("display", "none");
	$("#header_login").css("display", "block");
	$("#footer_logado").css("display", "none");

	exibirAba("aba_home");
}


function abrirChat(){

	$(".aba").css("display", "none");
	$("#aba_chat").css("display", "block");
}