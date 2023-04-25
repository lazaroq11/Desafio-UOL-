function FilterListDataLayer() {
  var dataLayer = window.dataLayer;
  if (typeof dataLayer !== 'undefined') {
    for (let i = 0; i < dataLayer.length; i++) {
      var evento = dataLayer[i];
      if (evento.event == 'xhr response' && evento.requestBody !== null && evento.requestBody !== undefined) {
        console.log(evento);
      }
    }
  }
}

FilterListDataLayer();
