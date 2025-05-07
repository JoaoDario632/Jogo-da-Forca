var pais;
var paisDisp;
var rodada;
var preencher1;
var preencher2;
var descarte;
var continuar;

pais = Math.random()*5;
pais = parseInt(pais);
rodada = 0;
preencher1 = 0;
preencher2 = 0;
continuar = 0;

switch (pais) {
    case 0:
        pais = ["a","l","e","m","a","n","h","a",""]
        paisDisp = ["# ","# ","# ","# ","# ","# ","# ","# ",""];
        break;
    
    case 1:
        pais = ["c","o","r","e","i","a","-","d","o","-","s","u","l",""];
        paisDisp = ["# ","# ","# ","# ","# ","# ","- ","# ","# ","- ","# ","# ","# ",""];
        break;
    
    case 2:
        pais = ["e","s","t","a","d","o","s","-","u","n","i","d","o","s",""];
        paisDisp = ["# ","# ","# ","# ","# ","# ","# ","- ","# ","# ","# ","# ","# ","# ",""];
        break;
    
    case 3:
        pais = ["j","a","p","a","o",""];
        paisDisp = ["# ","# ","# ","# ","# ",""];
        break;
    
    case 4:
        pais = ["f","r","a","n","c","a",""];
        paisDisp = ["# ","# ","# ","# ","# ","# ",""];
        break;
    
    default:
        break;
}

while (paisDisp[preencher1] != "") {
    document.getElementById("pais").innerHTML += paisDisp[preencher1];
    preencher1++;
}


function a(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "a") {
            paisDisp[preencher2] = "a";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        }
        preencher2++;
    }
    if (pais[0] != "a" && pais[1] != "a" && pais[2] != "a" && pais[3] != "a" && pais[4] != "a" && pais[5] != "a" && pais[6] != "a" && pais[7] != "a" && pais[8] != "a" && pais[9] != "a" && pais[10] != "a" && pais[11] != "a" && pais[12] != "a" && pais[13] != "a") {
        rodada++;
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " a";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function b(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "b") {
            paisDisp[preencher2] = "b";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "b" && pais[1] != "b" && pais[2] != "b" && pais[3] != "b" && pais[4] != "b" && pais[5] != "b" && pais[6] != "b" && pais[7] != "b" && pais[8] != "b" && pais[9] != "b" && pais[10] != "b" && pais[11] != "b" && pais[12] != "b" && pais[13] != "b") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " b";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function c(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "c") {
            paisDisp[preencher2] = "c";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "c" && pais[1] != "c" && pais[2] != "c" && pais[3] != "c" && pais[4] != "c" && pais[5] != "c" && pais[6] != "c" && pais[7] != "c" && pais[8] != "c" && pais[9] != "c" && pais[10] != "c" && pais[11] != "c" && pais[12] != "c" && pais[13] != "c") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " c";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function d(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "d") {
            paisDisp[preencher2] = "d";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "d" && pais[1] != "d" && pais[2] != "d" && pais[3] != "d" && pais[4] != "d" && pais[5] != "d" && pais[6] != "d" && pais[7] != "d" && pais[8] != "d" && pais[9] != "d" && pais[10] != "d" && pais[11] != "d" && pais[12] != "d" && pais[13] != "d") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " d";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function e(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "e") {
            paisDisp[preencher2] = "e";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "e" && pais[1] != "e" && pais[2] != "e" && pais[3] != "e" && pais[4] != "e" && pais[5] != "e" && pais[6] != "e" && pais[7] != "e" && pais[8] != "e" && pais[9] != "e" && pais[10] != "e" && pais[11] != "e" && pais[12] != "e" && pais[13] != "e") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " e";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function f(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "f") {
            paisDisp[preencher2] = "f";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "f" && pais[1] != "f" && pais[2] != "f" && pais[3] != "f" && pais[4] != "f" && pais[5] != "f" && pais[6] != "f" && pais[7] != "f" && pais[8] != "f" && pais[9] != "f" && pais[10] != "f" && pais[11] != "f" && pais[12] != "f" && pais[13] != "f") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " f";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function g(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "g") {
            paisDisp[preencher2] = "g";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "g" && pais[1] != "g" && pais[2] != "g" && pais[3] != "g" && pais[4] != "g" && pais[5] != "g" && pais[6] != "g" && pais[7] != "g" && pais[8] != "g" && pais[9] != "g" && pais[10] != "g" && pais[11] != "g" && pais[12] != "g" && pais[13] != "g") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " g";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function h(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "h") {
            paisDisp[preencher2] = "h";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "h" && pais[1] != "h" && pais[2] != "h" && pais[3] != "h" && pais[4] != "h" && pais[5] != "h" && pais[6] != "h" && pais[7] != "h" && pais[8] != "h" && pais[9] != "h" && pais[10] != "h" && pais[11] != "h" && pais[12] != "h" && pais[13] != "h") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " h";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function i(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "i") {
            paisDisp[preencher2] = "i";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "i" && pais[1] != "i" && pais[2] != "i" && pais[3] != "i" && pais[4] != "i" && pais[5] != "i" && pais[6] != "i" && pais[7] != "i" && pais[8] != "i" && pais[9] != "i" && pais[10] != "i" && pais[11] != "i" && pais[12] != "i" && pais[13] != "i") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " i";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function j(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "j") {
            paisDisp[preencher2] = "j";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "j" && pais[1] != "j" && pais[2] != "j" && pais[3] != "j" && pais[4] != "j" && pais[5] != "j" && pais[6] != "j" && pais[7] != "j" && pais[8] != "j" && pais[9] != "j" && pais[10] != "j" && pais[11] != "j" && pais[12] != "j" && pais[13] != "j") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " j";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function k(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "k") {
            paisDisp[preencher2] = "k";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "k" && pais[1] != "k" && pais[2] != "k" && pais[3] != "k" && pais[4] != "k" && pais[5] != "k" && pais[6] != "k" && pais[7] != "k" && pais[8] != "k" && pais[9] != "k" && pais[10] != "k" && pais[11] != "k" && pais[12] != "k" && pais[13] != "k") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " k";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function l(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "l") {
            paisDisp[preencher2] = "l";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "l" && pais[1] != "l" && pais[2] != "l" && pais[3] != "l" && pais[4] != "l" && pais[5] != "l" && pais[6] != "l" && pais[7] != "l" && pais[8] != "l" && pais[9] != "l" && pais[10] != "l" && pais[11] != "l" && pais[12] != "l" && pais[13] != "l") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " l";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function m(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "m") {
            paisDisp[preencher2] = "m";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "m" && pais[1] != "m" && pais[2] != "m" && pais[3] != "m" && pais[4] != "m" && pais[5] != "m" && pais[6] != "m" && pais[7] != "m" && pais[8] != "m" && pais[9] != "m" && pais[10] != "m" && pais[11] != "m" && pais[12] != "m" && pais[13] != "m") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " m";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function n(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "n") {
            paisDisp[preencher2] = "n";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "n" && pais[1] != "n" && pais[2] != "n" && pais[3] != "n" && pais[4] != "n" && pais[5] != "n" && pais[6] != "n" && pais[7] != "n" && pais[8] != "n" && pais[9] != "n" && pais[10] != "n" && pais[11] != "n" && pais[12] != "n" && pais[13] != "n") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " n";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function o(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "o") {
            paisDisp[preencher2] = "o";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "o" && pais[1] != "o" && pais[2] != "o" && pais[3] != "o" && pais[4] != "o" && pais[5] != "o" && pais[6] != "o" && pais[7] != "o" && pais[8] != "o" && pais[9] != "o" && pais[10] != "o" && pais[11] != "o" && pais[12] != "o" && pais[13] != "o") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " o";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function p(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "p") {
            paisDisp[preencher2] = "p";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "p" && pais[1] != "p" && pais[2] != "p" && pais[3] != "p" && pais[4] != "p" && pais[5] != "p" && pais[6] != "p" && pais[7] != "p" && pais[8] != "p" && pais[9] != "p" && pais[10] != "p" && pais[11] != "p" && pais[12] != "p" && pais[13] != "p") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " p";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function q(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "q") {
            paisDisp[preencher2] = "q";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "q" && pais[1] != "q" && pais[2] != "q" && pais[3] != "q" && pais[4] != "q" && pais[5] != "q" && pais[6] != "q" && pais[7] != "q" && pais[8] != "q" && pais[9] != "q" && pais[10] != "q" && pais[11] != "q" && pais[12] != "q" && pais[13] != "q") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " q";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function r(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "r") {
            paisDisp[preencher2] = "r";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "r" && pais[1] != "r" && pais[2] != "r" && pais[3] != "r" && pais[4] != "r" && pais[5] != "r" && pais[6] != "r" && pais[7] != "r" && pais[8] != "r" && pais[9] != "r" && pais[10] != "r" && pais[11] != "r" && pais[12] != "r" && pais[13] != "r") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " r";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function s(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "s") {
            paisDisp[preencher2] = "s";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "s" && pais[1] != "s" && pais[2] != "s" && pais[3] != "s" && pais[4] != "s" && pais[5] != "s" && pais[6] != "s" && pais[7] != "s" && pais[8] != "s" && pais[9] != "s" && pais[10] != "s" && pais[11] != "s" && pais[12] != "s" && pais[13] != "s") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " s";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function t(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "t") {
            paisDisp[preencher2] = "t";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "t" && pais[1] != "t" && pais[2] != "t" && pais[3] != "t" && pais[4] != "t" && pais[5] != "t" && pais[6] != "t" && pais[7] != "t" && pais[8] != "t" && pais[9] != "t" && pais[10] != "t" && pais[11] != "t" && pais[12] != "t" && pais[13] != "t") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " t";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function u(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "u") {
            paisDisp[preencher2] = "u";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "u" && pais[1] != "u" && pais[2] != "u" && pais[3] != "u" && pais[4] != "u" && pais[5] != "u" && pais[6] != "u" && pais[7] != "u" && pais[8] != "u" && pais[9] != "u" && pais[10] != "u" && pais[11] != "u" && pais[12] != "u" && pais[13] != "u") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " u";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function v(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "v") {
            paisDisp[preencher2] = "v";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "v" && pais[1] != "v" && pais[2] != "v" && pais[3] != "v" && pais[4] != "v" && pais[5] != "v" && pais[6] != "v" && pais[7] != "v" && pais[8] != "v" && pais[9] != "v" && pais[10] != "v" && pais[11] != "v" && pais[12] != "v" && pais[13] != "v") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " v";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function w(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "w") {
            paisDisp[preencher2] = "w";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "w" && pais[1] != "w" && pais[2] != "w" && pais[3] != "w" && pais[4] != "w" && pais[5] != "w" && pais[6] != "w" && pais[7] != "w" && pais[8] != "w" && pais[9] != "w" && pais[10] != "w" && pais[11] != "w" && pais[12] != "w" && pais[13] != "w") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " w";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function x(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "x") {
            paisDisp[preencher2] = "x";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "x" && pais[1] != "x" && pais[2] != "x" && pais[3] != "x" && pais[4] != "x" && pais[5] != "x" && pais[6] != "x" && pais[7] != "x" && pais[8] != "x" && pais[9] != "x" && pais[10] != "x" && pais[11] != "x" && pais[12] != "x" && pais[13] != "x") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " x";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function y(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "y") {
            paisDisp[preencher2] = "y";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "y" && pais[1] != "y" && pais[2] != "y" && pais[3] != "y" && pais[4] != "y" && pais[5] != "y" && pais[6] != "y" && pais[7] != "y" && pais[8] != "y" && pais[9] != "y" && pais[10] != "y" && pais[11] != "y" && pais[12] != "y" && pais[13] != "y") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " y";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}

function z(params) {
    continuar = 0;
    preencher2 = 0;
    while (pais[preencher2] != "") {
        if (pais[preencher2] == "z") {
            paisDisp[preencher2] = "z";
            preencher1 = 0;
            document.getElementById("pais").innerHTML = "";
            while (paisDisp[preencher1] != "") {
                document.getElementById("pais").innerHTML += paisDisp[preencher1]+" ";
                preencher1++;
            }
        } else {
            erro = 1;
        }
        preencher2++;
    }
    if (pais[0] != "z" && pais[1] != "z" && pais[2] != "z" && pais[3] != "z" && pais[4] != "z" && pais[5] != "z" && pais[6] != "z" && pais[7] != "z" && pais[8] != "z" && pais[9] != "z" && pais[10] != "z" && pais[11] != "z" && pais[12] != "z" && pais[13] != "z") {
        rodada++
        if (rodada <= 6) {
            document.getElementById("forca").src = "imagens/"+rodada+".png";
            document.getElementById("descarte").innerHTML += " z";
        }
        if (rodada == 6) {
            document.getElementById("resultado").innerHTML = "GAME OVER<br>Resposta: ";
            preencher1 = 0;
            while (paisDisp[preencher1] != "") {
                document.getElementById("resultado").innerHTML += pais[preencher1];
                preencher1++;
            }
        }
    }
    preencher1 = 0
    while (paisDisp[preencher1] != "") {
        if (paisDisp[preencher1] == "# ") {
            continuar = 1;
        }
        preencher1++;
    }
    if (continuar == 0) {
        document.getElementById("resultado").innerHTML = "VITÓRIA";
    }
}