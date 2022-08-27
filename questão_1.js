function tipoTriangulo (lado1, lado2, lado3) {
   
    if (lado1 == lado2 && lado1 == lado3) {
        console.log("Triângulo Equilátero");

    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        console.log("Triângulo Isósceles");

    } else {
        console.log("Triângulo Escaleno");
    }
}

tipoTriangulo(6, 6, 6)
tipoTriangulo(4, 2, 2)
tipoTriangulo(1, 2, 3)