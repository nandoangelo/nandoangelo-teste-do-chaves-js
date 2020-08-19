/* 
*		script.js
*		versão: 1.0.0
*		data:		2019-06-16
*		autor:	Fernando Angelo
*		email:	nandoangelo@gmail.com
*
*/

// Recebendo a data e hora do sistema
var agora 	= new Date();
var ano 		= agora.getFullYear();

/* 
	FUNÇÃO: atualizaAnoRodape()
	============================================
	Criada para atualizar o ano no copyright do 
	rodapé do site. */

function atualizaAnoRodape() {
	
	// Manipulador do DOM
	var anoRodape = document.querySelector('span.ano');
	
	// Atualizando o ano no rodapé do nosso site
	anoRodape.innerText = ano;
}

/* 
	FUNÇÃO: verificar() 
	============================================
	Recebe os dados passados pelo usuário e 
	retorna o resultado do nosso teste na área
	reservada. */

function verificar() {

	// Recebe o ano informado
	var anoNascimento = document.getElementById('txtano');
	// Área onde iremos inserir a resposta
	var resposta = document.querySelector('div#res');

	// Teste para saber se o valor inserido é válido
	if (anoNascimento.value == 0 || anoNascimento.value > ano) {
		
		// ENCONTROU ERRO... 
		
		// Exibe alerta para o usuário
		window.alert(`[ERROR] "${anoNascimento.value}" Não é um valor aceitável.\n`+
			`Verifique os dados e tente novamente.`);
	}
	else {
		
		// NÃO ENCONTROU ERRO...

		// Cria as variáveis para manipular os elementos
		var fsex 		= document.getElementsByName('genre'); // Recebe os 'radio buttons'
		var idade 	= ano - Number(anoNascimento.value); // Calcula a idade
		var genero 	= ''; // Variável para receber o gênero
		var img 		= document.createElement('img'); // Cria um elemento de imagem <img>
		var legenda = ''; // Legenda da foto

		// Definindo um ID para nosso elemento <img>
		img.setAttribute('id','foto')

		// Agora veremos qual o sexo selecionado
		if (fsex[0].checked) {
			
			// Marcou 'Masculino'
			genero = 'Homem';
			
			// Exibindo a imagem masculina de acordo com a idade
			if (idade >= 0 && idade < 12) {
				// Criança
				img.setAttribute('src','img/chaves-crianca-masc.jpg');
				legenda = 'O Chaves'; // Define a legenda da foto
			} else if (idade < 21) {
				// Jovem
				img.setAttribute('src','img/chaves-jovem-masc.jpg');
				legenda = 'O Kiko';
			} else if (idade < 50) {
				// Adulto
				img.setAttribute('src','img/chaves-adulto-masc.jpg');
				legenda = 'O Seu Madruga';
			} else {
				// Idoso
				img.setAttribute('src','img/chaves-idoso-masc.jpg');
				legenda = 'O Jaiminho';
			}

		}	else if (fsex[1].checked) {
			
			// Marcou 'Feminino'
			genero = 'Mulher';

			// Exibindo a imagem feminina de acordo com a idade
			if (idade >= 0 && idade < 12) {
				// Criança
				img.setAttribute('src','img/chaves-crianca-fem.jpg');
				legenda = 'A Chiquinha'; // Definindo a legenda
			} else if (idade < 21) {
				// Jovem
				img.setAttribute('src','img/chaves-jovem-fem.jpg');
				legenda = 'A Paty';
			} else if (idade < 50) {
				// Adulto
				img.setAttribute('src','img/chaves-adulto-fem.jpg');
				legenda = 'A Dona Florinda';
			} else {
				// Idoso
				img.setAttribute('src','img/chaves-idoso-fem.jpg');
				legenda = 'A Dona Neves';
			}
		}

		// Montando e exibindo a resposta para o usuário
		resposta.innerHTML = `<p>Você é <strong>${genero}</strong> e tem <strong>${idade} anos.</strong></p><p>Você poderia ser...</p>`;
		
		// Acrescentando a foto na resposta
		resposta.appendChild(img);

		// Acrescentando a legenda abaixo da foto
		resposta.innerHTML += `<h3>${legenda}</h3>`;
	}
}