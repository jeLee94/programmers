function getDaysLeft(progress, speed) {
  const daysLeft = Math.ceil((100 - progress) / speed);
  return daysLeft;
}

function solution(progresses, speeds) {
  const queue = [];
  const answer = [];

  // 큐에 작업 추가
  for (let i = 0; i < progresses.length; i++) {
    const daysLeft = getDaysLeft(progresses[i], speeds[i]);
    queue.push(daysLeft);
  }

  // 배포 작업 수 계산
  while (queue.length > 0) {
    let count = 0;
    const first = queue[0];

    // 큐에서 작업 빠져나가면서 배포 작업 수 계산
    while (queue.length > 0 && queue[0] <= first) {
      count++;
      queue.shift();
    }

    answer.push(count);
  }

  return answer;
}
