
function solution(n) {
    const dp = [0, 1]; // 피보나치 수열의 첫 번째와 두 번째 수를 배열에 저장

    for (let i = 2; i <= n; i++) { // i번째 수를 계산하여 dp 배열에 추가
    dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
        
    }
    return dp[n]
}