function getCartInformation(){
productsIds = '';
var dataLayer = window.dataLayer;
if(typeof dataLayer !== 'undefined'){
    for(let i = 0; i<dataLayer.length;i++){
        var evento = dataLayer[i];
        if(evento.valorSacola != null){
        console.log("Valor total: " + evento.valorSacola);
        }  
        if(evento.product && evento.product.length >0){
            for(let j = 0; j<evento.product.length; j++){
                productsIds += evento.product[j].id + ',';
                }
            }
        }
    console.log("Ids dos produtos: " + productsIds.slice(0, -1));
    }
}

getCartInformation();