/*
 * DESENVOLVEDOR: RODRIGO RUY OLIVEIRA
 * DATA         : 07/11/2016
 * DESCR.       : FUNÇÃO PARA REALIZAR A LEITURA DO RSS
 */
$(function () {
    var urlRss = 'http://www.panoramacomerc.com.br/?feed=rss2';
    $.ajax({
        type: "GET",
        url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(urlRss),
        dataType: 'json',
        error: function (xhr) {
            var erro = xhr.responseText;
            alert('Erro ao ler o feed: ' + erro);
        },
        success: function (xml) {
            values = xml.responseData.feed.entries;

            for(var i = 0; i < values.length; i++) {
                var value = values[i]
               $(".noticias").append("<article><h1>"+ value.title + "</h1><p>" + value.contentSnippet + "</p><span><a href='"+ value.link +"' target='_blank'>Saiba Mais...</a></span></article>");
            }
        }
    });
});