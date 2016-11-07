/*
 * DESENVOLVEDOR: RODRIGO RUY OLIVEIRA
 * DATA         : 07/11/2016
 * DESCR.       : FUNÇÃO PARA RETORNAR A HORA ATUAL
 * 
 */
function Relogio(){ 
    var momentoAtual = new Date();

    var vhora    = momentoAtual.getHours();
    var vminuto  = momentoAtual.getMinutes();
    var vsegundo = momentoAtual.getSeconds();

    if (vhora < 10){ vhora = "0" + vhora;}
    if (vminuto < 10){ vminuto = "0" + vminuto;}
    if (vsegundo < 10){ vsegundo = "0" + vsegundo;}

    horaFormat = vhora + ":" + vminuto + ":" + vsegundo;

    document.getElementById("hora").innerHTML = horaFormat;

    setTimeout("Relogio()",1000);
}