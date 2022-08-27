function boletimAlunos(nota) {
    
    const notaArredondada = arredondar(nota);
   
    if (notaArredondada < 40) {
        console.log(`Aluno foi reprovado com nota ${notaArredondada}`);
    } else {
        console.log(`Aluno foi aprovado com nota ${notaArredondada}`);
    }
}

function arredondar (nota) {
    if (nota < 38) {
        return nota
    } else if (nota % 5 >= 3 ) {
        return nota = nota + (5 - (nota % 5));
    } else {
        return nota = nota - (nota % 5);
    }
}

boletimAlunos(84);
boletimAlunos(38);
boletimAlunos(29);