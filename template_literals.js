function sides(literals, ...expressions) {
    const area = expressions[0];
    const perimeter = expressions[1];
    console.log(area);
    console.log(perimeter);

    const s1 = (perimeter + Math.sqrt(perimeter ** 2 - 16 * area)) / 4;
    const s2 = (perimeter - Math.sqrt(perimeter ** 2 - 16 * area)) / 4;
    console.log(s1);
    console.log(s2);

    const result = [s1, s2].sort((a, b) => a - b);
    console.log(result);

    return result;
}


function main() {
    let s1 = 10;
    let s2 = 14;
    
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}

main();