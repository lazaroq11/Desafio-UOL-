function findFunnelStage(){
   const url = window.location.href;
   const urlTag = url.split('/');
   if(urlTag.length > 3 && urlTag[3] === 'categoria'){
    console.log('A etapa do funil é: categoria');
   } else if(urlTag.length > 3 && urlTag[3] === 'produto'){
   console.log('A etapa do funil é: produto');
   } else if(url.endsWith('/')) {
    console.log("Estamos na etapa home");
   } else{
    console.log("Não foi possível encontrar a etapa do funil");
   }
}

findFunnelStage();

