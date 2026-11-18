document.getElementById("share").onclick=function(){var d={title:"Novembro Azul",text:"Cuide da sua saúde. Novembro Azul 💙",url:location.href};
if(navigator.share){navigator.share(d).catch(function(){})}else if(navigator.clipboard){navigator.clipboard.writeText(location.href).then(function(){alert("Link copiado!")}).catch(function(){})}};
