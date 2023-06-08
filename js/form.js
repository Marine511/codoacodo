function calcular () {
  const cantidad_entradas = document.getElementById("cantidad").options[document.getElementById("cantidad").selectedIndex].value;
  const tpticket_categoria = document.getElementById("tpticket").options[document.getElementById("tpticket").selectedIndex].value;

  var valor= 200
switch(tpticket_categoria)
{
    case "Estudiante":
        r= cantidad_entradas  * (valor * (20/100));
        break;
    case "Trainee":
        r= cantidad_entradas  * (valor * (50/100));
        break;
    case "Junior":
        r= cantidad_entradas  * (valor * (85/100));
        break;
}
resumen = document.getElementById("resumen")
    document.getElementById("total").style.display = "block"
    resumen.addEventListener("click", function(){})+(document.getElementById("total").innerHTML="Total a pagar:$"+r);
};

function deshacer (){
    document.getElementById("total").style.display = "none"
    document.getElementById("borrar").addEventListener("click", function(){reset});
};