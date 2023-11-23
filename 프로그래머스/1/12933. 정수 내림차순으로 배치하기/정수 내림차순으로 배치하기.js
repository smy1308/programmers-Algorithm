//function solution(n) {
    //let str = String(n).split("")
    //let sort = str.sort((a,b)=>b-a)
    //let num = sort.join("")
    //let answer = parseInt(num)
    //return answer
//}

function solution(n) {
    return Number(n.toString().split("").sort((a,b)=>b-a).join(""))
}