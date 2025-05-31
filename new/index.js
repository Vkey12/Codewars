// Given a positive integer N, return the largest integer k such that 3^k < N.

// For example,

// 3 --> 0
// 4 --> 1
// You may assume that the input to your function is always a positive integer.

function largestPower(n){
    for(let i=0; ;i++) if(3**i>=n) return i-1// return the largest integer k such that 3^k < n
}