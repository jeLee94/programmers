function solution(keyinput, board) {
    let changes = { left: [-1, 0], right: [1, 0], up: [0, 1], down: [0, -1] };
    let result = []
    const [rangeX, rangeY] = [~~(board[0]/2), ~~(board[1]/2)]
    
    return keyinput.map(key => changes[key])
        .reduce(([accX,accY],[curX,curY])=> Math.abs(accX+curX)<=rangeX && Math.abs(accY+curY) <=rangeY
                ? [accX+curX, accY+curY] : [accX,accY], [0,0])
}