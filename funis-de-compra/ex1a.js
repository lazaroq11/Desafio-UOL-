function getProductInformation() {
  let productsIds = '';
  let productsAmount = 0;
  var dataLayer = window.dataLayer;
  if (typeof dataLayer !== 'undefined') {
    for (let i = 0; i < dataLayer.length; i++) {
      var evento = dataLayer[i];
      if (evento.ecommerce && evento.ecommerce.impressions) {
        const detail = evento.ecommerce.impressions;
        productsAmount += detail.length;
        console.log('Quantidade de Itens: ' + productsAmount);
        for (let j = 0; j < detail.length; j++) {
          const productId = detail[j].id;
          if (productsIds !== '') {
            productsIds += ',';
          }
          productsIds += productId;
        }
      }
    }
    console.log('Lista de IDs de Produtos: ' + productsIds);
  }
}

getProductInformation();
