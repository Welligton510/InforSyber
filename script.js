$(document).ready(function () {
    $('#btnPesquisar').click(function () {
      const termo = $('#pesquisa').val();
      if (termo.trim() !== '') {
        alert('Busca por: ' + termo);
      } else {
        alert('Digite algo para pesquisar.');
      }
    });
  
    $('#btnCatalogo').click(function () {
      $('html, body').animate({
        scrollTop: $('#catalogo').offset().top
      }, 500);
    });
  });
  