function solution(x) {
    sum = 0;
    let str = String(x).split("");
    
    for (let i = 0; i<str.length; i++) {
        sum += Number(str[i]);
    }
    return (x % sum === 0) ? true : false;
}