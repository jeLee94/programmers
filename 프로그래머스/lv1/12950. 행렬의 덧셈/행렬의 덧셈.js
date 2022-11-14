function solution(arr1, arr2) {
    let result = Array.from(Array(arr1.length), () => Array(arr1[0].length));

    for (i in arr1) {
      for (j in arr1[i]) {
        result[i][j] = arr1[i][j] + arr2[i][j];
        
      }
    }
    return result
}