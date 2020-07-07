function calcular(tipo, valor){
    
    // Pegando o valor do visor
    var valor_visor = document.getElementById('resultado').value

    if(tipo === 'acao'){

        if(valor === 'c'){
            // Limpar o visor (id resultado)
            document.getElementById('resultado').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor 
        }

        if(valor === '='){
            document.getElementById('resultado').value = eval(valor_visor)
            
        }

    } else if(tipo === 'valor'){
        document.getElementById('resultado').value = valor_visor + valor
    }

}