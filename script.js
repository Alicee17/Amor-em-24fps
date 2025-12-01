// script.js
const filmes = {
  animacao: [
    { nome: 'Viva a Vida é uma Festa', imagem: 'imagem1.jpg', classificacao: 'Livre', ano: 0, duracao: '0', sinopse: 'Em Viva - A Vida é uma Festa, Miguel é um menino de 12 anos que quer muito ser um músico famoso, mas ele precisa lidar com sua família que desaprova seu sonho. Determinado a virar o jogo, ele acaba desencadeando uma série de eventos ligados a um mistério de 100 anos.', trailer: 'linkfilme1' },
    { nome: 'Um Século de Animação', imagem: 'imagem2.jpg', classificacao: '10', ano: 0, duracao: '0', sinopse: 'Esta é a primeira e única história da animação que deleita o público de todas as idades. O programa trata de desenhos animados, contaremos com exemplos de todo o mundo e, claro, será apresentado por personagens animados.', trailer: 'linkfilme2' },
    { nome: 'Minha Querida Oni', imagem: 'imagem3.jpg', classificacao: '12', ano: 0, duracao: '0', sinopse: 'Minha Querida Oni, dirigido por Tomotaka Shibayama, vai mostrar Hiiragi Yatsuse, um estudante que conhece Tsumugi, uma garota oni. Juntos embarcam em uma jornada mística e emocionante.', trailer: 'linkfilme3' },
    { nome: 'A Mais Preciosa das Cargas', imagem: 'imagem4.jpg', classificacao: '14', ano: 0, duracao: '0', sinopse: 'A história acontece em meio a uma guerra, quando um humilde lenhador e sua esposa resgatam um bebê jogado de um trem. A chegada da criança transforma suas vidas e as de todos ao redor.', trailer: 'linkfilme4' },
    { nome: 'Inferno de Dante', imagem: 'imagem5.jpg', classificacao: '16', ano: 0, duracao: '0', sinopse: 'A jornada de Dante pelos nove círculos do Inferno em busca de seu amor, Beatriz.', trailer: 'linkfilme5' }
  ],
  terror: [
    { nome: 'Gremlins', imagem: 'imagem6.jpg', classificacao: 'Livre', ano: 0, duracao: '0', sinopse: 'Rand Peltzer compra um Mogwai para seu filho Billy, mas quando as regras não são seguidas, criaturas terríveis começam a aterrorizar a cidade.', trailer: 'linkfilme6' },
    { nome: 'Paranorman', imagem: 'imagem7.jpg', classificacao: '10', ano: 0, duracao: '0', sinopse: 'Norman é um garoto que vê os mortos e precisa ajudar a cidade contra uma maldição que faz os mortos se levantarem das tumbas.', trailer: 'linkfilme7' },
    { nome: 'Horror em Amityville', imagem: 'imagem8.jpg', classificacao: '12', ano: 0, duracao: '0', sinopse: 'George e Kathy se mudam para a casa onde uma família foi assassinada e começam a ser afetados por uma presença maligna.', trailer: 'linkfilme8' },
    { nome: 'A Bruxa de Blair', imagem: 'imagem9.jpg', classificacao: '14', ano: 0, duracao: '0', sinopse: 'Três estudantes de cinema desaparecem misteriosamente nas matas do estado de Maryland enquanto investigavam a lenda da bruxa de Blair.', trailer: 'linkfilme9' },
    { nome: 'A Hora do Pesadelo 2: A Vingança de Freddy', imagem: 'imagem10.jpg', classificacao: '16', ano: 0, duracao: '0', sinopse: 'Jesse Walsh começa a ter visões de Freddy Krueger, que tenta possuí-lo para continuar seus assassinatos.', trailer: 'linkfilme10' }
  ],
  romance: [
    { nome: 'Meu Primeiro Amor', imagem: 'imagem11.jpg', classificacao: 'Livre', ano: 0, duracao: '0', sinopse: 'Vada Sultenfuss, uma garota de 11 anos, se vê apaixonada por seu professor de inglês, enquanto sua vida é marcada pela morte de sua mãe e o trabalho de seu pai como agente funerário.', trailer: 'linkfilme11' },
    { nome: 'A Pequena Sereia', imagem: 'imagem12.jpg', classificacao: '10', ano: 0, duracao: '0', sinopse: 'Ariel, uma jovem sereia, se apaixona por um príncipe humano e faz um acordo com a bruxa Úrsula para viver na terra e conquistá-lo.', trailer: 'linkfilme12' },
    { nome: 'A Cinco Passos de Você', imagem: 'imagem13.jpg', classificacao: '12', ano: 0, duracao: '0', sinopse: 'Stella e Will, dois adolescentes com fibrose cística, se apaixonam, mas são forçados a manter distância um do outro por questões de saúde.', trailer: 'linkfilme13' },
    { nome: 'Continência ao Amor', imagem: 'imagem14.jpg', classificacao: '14', ano: 0, duracao: '0', sinopse: 'Cassie trabalha em um bar e, para conseguir um convênio médico, entra em um casamento de conveniência com Luke, um fuzileiro naval. Eles acabam se apaixonando de verdade.', trailer: 'linkfilme14' },
    { nome: 'Amor de Redenção', imagem: 'imagem15.jpg', classificacao: '16', ano: 0, duracao: '0', sinopse: 'Angel, uma mulher que sofreu traumas no passado, é amada incondicionalmente por Michael Oséias, um homem que desafia suas expectativas de redenção e cura.', trailer: 'linkfilme15' }
  ]
};

let idadeUsuario = 0;

function inserirNome() {
  let nomeUsuario = prompt("Qual o seu nome?");
  let elemento = document.querySelector("#nome-usuario");
  elemento.textContent = `Olá, ${nomeUsuario}! Espero te ajudar a escolher um filme!`;
}

function validarIdade() {
  const input = document.getElementById('idade');
  idadeUsuario = parseInt(input.value);
  if (!isNaN(idadeUsuario) && idadeUsuario >= 0) {
    document.getElementById('menu-generos').classList.remove('oculto');
  } else {
    alert('Por favor, digite uma idade válida.');
  }
}

function mostrarFilmes(genero) {
  const container = document.getElementById('conteudo-filmes');
  container.innerHTML = '';

  filmes[genero].forEach(filme => {
    if (verificarClassificacao(filme.classificacao)) {
      const div = document.createElement('div');
      div.classList.add('filme');
      
      div.innerHTML = `
        <h2>${filme.nome}</h2>
        <img src="${filme.imagem}" alt="${filme.nome}" />
        <p><strong>Classificação:</strong> ${filme.classificacao} anos</p>
        <p><strong>Ano:</strong> ${filme.ano}</p>
        <p><strong>Duração:</strong> ${filme.duracao}</p>
        <p><strong>Sinopse:</strong> ${filme.sinopse}</p>
        <iframe 
          src="https://www.youtube.com/embed/${filme.trailer}"
          allowfullscreen>
        </iframe>
      `;
      
      container.appendChild(div);
    }
  });
}

function verificarClassificacao(classificacao) {
  if (classificacao === 'Livre') return true;
  return idadeUsuario >= parseInt(classificacao);
}

inserirNome();
