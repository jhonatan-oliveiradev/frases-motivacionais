function gerarFraseMotivacional() {
  const frases = [
    "A persistência é o caminho do êxito.",
    "Se você não está disposto a arriscar, o que você faz? Não arrisca e vai ter sucesso.",
    "O sucesso normalmente vem para quem está ocupado demais para procurar por ele.",
    "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.",
    "Não há nada mais triste do que o terror de não conseguir cumprir um de seus planos.",
    "Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.",
    "A motivação não é a vontade, mas a capacidade de atingir a vontade.",
    "A motivação não é a coragem, mas a persistência.",
    "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.",
    "No meio da dificuldade encontra-se a oportunidade.",
    "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
    "Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.",
    "A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.",
    "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.",
    "É parte da cura o desejo de ser curado.",
    "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
    "O sucesso não consiste em fazer o que quiser, mas em fazer o que é difícil.",
    "O sucesso não vem de ter muito ou não ter nada. O sucesso vem quando você percebe que você está na direção certa.",
    "O que me preocupa não é o grito dos maus. É o silêncio dos bons.",
    "Imagine uma nova história para sua vida e acredite nela.",
    "O que você pode fazer agora que tem o maior impacto sobre o seu futuro?",
    "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
    "O sucesso é o que você mais quer na vida.",
    "Quando você quer alguma coisa, todo o universo conspira para que você realize o seu desejo.",
    "O sucesso vem de seus sonhos.",
    "Você precisa fazer aquilo que pensa que não é capaz de fazer.",
    "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
    "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.",
    "Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.",
    "Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.",
    "O descanso é essencial para o bom funcionamento da nossa mente e corpo. O descanso dá energia para encarar o dia a dia.",
  ];

  const numeroAleatorio = Math.floor(Math.random() * frases.length);
  const frase = frases[numeroAleatorio];

  document.getElementById("frase").innerHTML = frase;
}
