function solution(n) {
    let a = n.toString(3);
    let b = a.split("").reverse().join("")
    return parseInt(b, 3)
}