function solution(nums) {
    const set = new Set(nums)
    return nums.length/2 < Array.from(set).length ? nums.length/2 : Array.from(set).length
}