function Bhaskara(ax2, bx, c) {
    const delta = bx ** 2 - 4 * ax2 * c;
    if (delta >= 0) {
        const raizes = [];
        x1 = (-bx + Math.sqrt(delta))/( 2 * ax2);
        raizes.push(x1);
        x2 = (-bx - Math.sqrt(delta))/( 2 * ax2);
        raizes.push(x2);
        return raizes;
    } else {
        return "Delta é negativo";
    }
}




