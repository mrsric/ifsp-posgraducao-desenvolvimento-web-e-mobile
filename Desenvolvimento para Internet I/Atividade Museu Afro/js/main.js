// Define o intervalo de troca automática de slides (em ms)
$('#bannerMemorias').carousel({
    interval: 6000
});

// (opcional) rolagem suave ao clicar nos links do menu
$('.navbar a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const alvo = this.hash;
    const $alvo = $(alvo);

    if ($alvo.length) {
        $('html, body').animate({
            scrollTop: $alvo.offset().top - 70
        }, 600);
    }
});
