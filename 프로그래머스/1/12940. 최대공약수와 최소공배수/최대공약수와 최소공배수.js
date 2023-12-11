function solution(n, m) {
    let Num1 = 1;
    for (let i = 2; i <= Math.min(n,m); i++) {
        if (n % i === 0 && m % i === 0)
            Num1 = i;
    }
    let Num2 = n * m / Num1;
    return [Num1, Num2];
}