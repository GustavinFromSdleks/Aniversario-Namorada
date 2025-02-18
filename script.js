// Faz o botão "Não" fugir quando o cursor passa por cima
document.addEventListener("DOMContentLoaded", function () {
    var botaoNao = document.getElementById("nao");
    var botaoSim = document.getElementById("sim");
    var buttonsContainer = document.querySelector(".buttons-container");

    // Garante que o botão "Não" comece ao lado do "Sim"
    function posicionaBotaoNao() {
        var simRect = botaoSim.getBoundingClientRect();
        var containerRect = buttonsContainer.getBoundingClientRect();
        
        botaoNao.style.position = "absolute";
        botaoNao.style.left = (simRect.right - containerRect.left + 10) + "px"; // 10px de espaçamento do lado direito
        botaoNao.style.top = (simRect.top - containerRect.top) + "px"; // Mantém alinhado verticalmente dentro do container
    }

    // Chama a função para posicionar o botão "Não" ao lado do "Sim" quando a página carregar
    posicionaBotaoNao();

    // Função para o botão "Não" fugir
    function fuja() {
        var containerRect = buttonsContainer.getBoundingClientRect();

        var deslocamentoMax = containerRect.width - botaoNao.offsetWidth; // Máximo que ele pode se mover na horizontal
        var deslocamentoMaxY = containerRect.height - botaoNao.offsetHeight; // Máximo que ele pode se mover na vertical

        var aleatorioX = Math.random() * deslocamentoMax;
        var aleatorioY = Math.random() * deslocamentoMaxY;

        // Garante que o botão "Não" não saia dos limites do container
        aleatorioX = Math.max(0, Math.min(aleatorioX, deslocamentoMax));
        aleatorioY = Math.max(0, Math.min(aleatorioY, deslocamentoMaxY));

        // Aplica os novos valores
        botaoNao.style.left = aleatorioX + "px";
        botaoNao.style.top = aleatorioY + "px";
    }

    // Atribui a função de fuga ao evento "mouseover"
    botaoNao.onmouseover = fuja;

    // Reposiciona o botão "Não" caso a janela seja redimensionada
    window.addEventListener("resize", posicionaBotaoNao);
});




// Animação de corações flutuando na tela
document.addEventListener("DOMContentLoaded", function() {
    const heartsContainer = document.querySelector('.hearts-container');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000); // Tempo de duração dos corações na tela
    }
    
    setInterval(createHeart, 300); // Criar novos corações a cada 300ms
});

// Lógica dos baús
document.addEventListener("DOMContentLoaded", function() {
    const chestButtons = document.querySelectorAll('.open-chest-button');
    const descriptionContainer = document.getElementById('description-container');
    const chestDescription = document.getElementById('chest-description');
    const chestPasswordInput = document.getElementById('chest-password');
    const submitPasswordButton = document.getElementById('submit-password');
    const modal = document.getElementById('success-modal');
    const modalText = document.getElementById('modal-text');
    const closeModalButton = document.getElementById('close-modal');

    // Detalhes dos baús com dicas, senhas e mensagens
    const chestDetails = {
        1: { 
            description: "1º BAU - Dica: Personagem fictício que lembra você, teve uma noite encantada",
            password: "cinderela",
            message: "🌟 Você encontrou um segredo especial, descobriu que minha princesa favorita e literalmente voce! Você é minha Cinderela, sempre iluminando meus dias com sua magia💖. Quero primeiramente te desejar um feliz aniversario, voce e a pessoa mais especial que ja conheci na minha vida, Te desejo toda a felicidade do mundo e que Deus sempre possa te guiar e abencoar durante toda sua jornada, e espero fazer parte dela tambem, estarei sempre por voce meu amor, eu te amo... muito mais do que voce poderia imaginar. Tambem queria comentar que voce alem de linda e uma pessoa muito dificil de presentearrrrr, porem acredito que eu tenha acertado, infelizmente lamento informar que o mesmo ainda nao esta comigo pois nao chegou (que azar viuu), mas te garanto que a espera vai valer a pena😉 >27 setembro 2024<"
            
        },
        2: { 
            description: "2º BAU - Dica: O que mais me encanta em você, os vejo em dias limpos ao olhar para cima, ou até mesmo na praia ao ver o mar",
            password: "olhos",
            message: "👀 Seus olhos são meu porto seguro. Eles refletem a imensidão do céu e do mar, sempre me trazendo paz, espero poder me perder neles para sempre 💙 >Music?<"
        },
        3: { 
            description: "3º BAU - Dica: Posso ser medido, mas nunca recuperado.",
            password: "tempo",
            message: "⏳ O tempo ao seu lado é meu bem mais precioso, mesmo em alguns momentos ele nos tirar o sono e nos cobrir de pensamentos o futuro que eu vejo com voce e lindo, e farei de tudo para que nada afete ele. Que possamos construir juntos infinitos momentos felizes. 💕 >BIRDS<"
        }
    };

    // Adiciona evento para abrir o baú e mostrar a dica
    chestButtons.forEach(button => {
        button.addEventListener('click', function() {
            const chestId = this.parentElement.dataset.id;
            chestDescription.textContent = chestDetails[chestId].description;
            descriptionContainer.style.display = 'block';
            chestPasswordInput.value = ''; // Limpa o campo de senha

            // Evento para verificar a senha
            submitPasswordButton.onclick = function() {
                const password = chestPasswordInput.value.toLowerCase(); // Ignora diferenças entre maiúsculas e minúsculas
                if (password === chestDetails[chestId].password) {
                    modalText.textContent = chestDetails[chestId].message;
                    modal.style.display = 'flex'; 
                } else {
                    alert("Senha incorreta. Tente novamente.");
                }
            };
        });
    });

    
    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});



//lixeir
document.addEventListener("DOMContentLoaded", function () {
    const finalizarButton = document.getElementById('finalizar-button');
    const descriptionContainer = document.getElementById('description-container');
    const chestDescription = document.getElementById('chest-description');
    const chestPasswordInput = document.getElementById('chest-password');
    const submitPasswordButton = document.getElementById('submit-password');
    const modal = document.getElementById('success-modal');
    const modalText = document.getElementById('modal-text');
    const closeModalButton = document.getElementById('close-modal');

    // Adiciona evento ao botão "Finalizar"
    finalizarButton.addEventListener('click', function () {
        chestDescription.textContent = "Dica: em cada bau houveram sinais para a senha final, uma musica que me lembrou demais voce enquanto fazia isso ___ __ _ ______ (na senha tem caracteres de espaco) ";
        descriptionContainer.style.display = 'block';
        chestPasswordInput.value = ''; // Limpa o campo de senha

        // Modifica a lógica do botão "Confirmar"
        submitPasswordButton.onclick = function () {
            const senhaFinal = chestPasswordInput.value.toLowerCase(); // Ignora maiúsculas/minúsculas
            
            if (senhaFinal === "birds of a feather") { // Senha correta
                modalText.textContent = "ACERTOUUUUUUUUUUUU! Feliz aniversario novamente vida, eu te amo muito, sou extremamente feliz e grato de ter voce na minha vida, uma das pessoas mais especiais que tive o prazer de conhecer, que Deus te abencoe e te ilumine sempre, mais que tudo quero ver voce sendo feliz, aproveite seu dia e tambem a musica!! 🌟";
                modal.style.display = 'flex'; // Exibe o modal com a mensagem especial
            } else {
                alert("Senha incorreta. Tente novamente.");
            }
        };
    });

    // Fecha o modal ao clicar no botão "Fechar"
    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});
