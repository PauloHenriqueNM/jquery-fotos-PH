$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        const endereçoNovaImagem = $('#nova-imagem').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endereçoNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="estilo-imagens">
                <a href="${endereçoNovaImagem}" target="blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div> 
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1500);
        $('#nova-imagem').val('');
    });

    $('.botaocancelar').click(function () {
        $('form').slideUp();
    })

});
