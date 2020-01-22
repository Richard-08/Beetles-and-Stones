
const beetlesAndStones = (s, b) => {
    let freeStones = [s]; // массив свободных камней
    let left;
    let right;
    let i;
    while (b > 0) {
        b -= 1;
        freeStones.sort((a, b) => b - a); // сортируем по убыванию

        i = Math.round(freeStones[0] / 2); // находим равноудаленный камень
        left = i - 1; // свободные камни слева
        right = freeStones[0] - i; // свободные камни справа

        freeStones.shift();
        freeStones.push(left);
        freeStones.push(right);
    }
    return [`Free stones in left: ${left}`, `Free stones in right: ${right}`];
}

console.log(beetlesAndStones(8, 1)); // 3,4
console.log(beetlesAndStones(8, 2)); // 1, 2
console.log(beetlesAndStones(8, 3)); // 1, 1