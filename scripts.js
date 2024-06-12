document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    const typingText = document.getElementById('typing-text');
    const backgroundMusic = document.getElementById('background-music');

    function showMainContent() {
        introScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
        backgroundMusic.play();
    }

    introScreen.addEventListener('click', showMainContent);

    // Simulação de digitação
    const text = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();

    // Adiciona eventos de clique nas imagens dos cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const phrase = card.getAttribute('data-phrase');
            const phraseElement = card.querySelector('.phrase');
            phraseElement.innerText = phrase;
            phraseElement.classList.toggle('hidden');
        });
    });
});
