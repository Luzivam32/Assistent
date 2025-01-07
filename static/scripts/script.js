$(document).ready( function() {
    $('#orcament').on('submit', function(event) {
        event.preventDefault();
        var formData = {
            'peca': $('#peca').val(),
            'frete': $('#frete').val()
        };
        
        $.ajax({
            type: 'POST',
            url: '/submit',
            data: formData,
            dataType: 'json',
            encode: true,
            success: function(data) {
                var orcamentoFormatado = data.orcamento.toLocaleString('pt-BR', {
                    style:'currency',
                    currency: 'BRL'
                })
                $('#result').html('<li>' + orcamentoFormatado  + '</li>');
                $('#orcament')[0].reset();
            }
        });
    });
});
$(document).ready(function() {
    $('#cadastro').on('submit', function(event) {
        event.preventDefault();
        var formData = {
            'marca' : $('#marca').val(),
            'modelo': $('#modelo').val(),
            'valor' : $('#valor').val(),
            'quant' : $('#quant').val()

        };

        $.ajax({
            type: 'POST',
            url: '/cadastro',
            data: formData ,
            dataType: 'json',
            encode: true,
            success: function(data) {
                if (data.erro) {
                    alert(data.erro);
                } else {
                    $('#listcadastro').append('<tr><td>' + data.marca +'</td>' + '<td>' + data.modelo +'</td>' + '<td>' + data.valor +'</td>' + '<td>' + data.quant +'</td></tr>');
                    $('#cadastro')[0].reset();
                }
            }
        });
    });
});