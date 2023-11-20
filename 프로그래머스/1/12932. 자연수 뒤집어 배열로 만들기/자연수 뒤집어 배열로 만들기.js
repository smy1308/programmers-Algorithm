function solution(n) {
    let String = n.toString().split("").reverse();
    console.log(String)
    let answer = String.map(Number);
    return answer;
}