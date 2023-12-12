function solution(s) {
    let answer = []
    let a = s.split(" ")
    for (let i = 0; i < a.length; i++) {
        let b = ""
        for (let j = 0; j < a[i].length; j++) {
            if (j % 2 === 0) {
                b += a[i][j].toUpperCase()
            } else {
                b += a[i][j].toLowerCase()
            }
        }
        answer.push(b)
    }
    return answer.join(" ")
}