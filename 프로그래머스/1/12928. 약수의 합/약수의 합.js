function solution(n) {
    let arr = [];
    for ( let i = 1; i <= n; i++ ) {
        if ( n % i === 0 ) arr.push(i);
    }
    let answer = arr.reduce((a, b) => ( a + b ), 0 );
    return answer;
}