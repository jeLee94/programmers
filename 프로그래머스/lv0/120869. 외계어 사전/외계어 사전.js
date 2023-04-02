function solution(spell, dic) {
  let used = Array(spell.length).fill(false); 
  let foundWord = false; 
  for (let word of dic) { 
    if (word.length !== spell.length) { 
      continue;
    }
    let matched = true; 
    for (let i = 0; i < spell.length; i++) {
      if (!word.includes(spell[i])) { 
        matched = false;
        break;
      }
      let index = word.indexOf(spell[i]); 
      while (index !== -1 && used[index]) { 
        index = word.indexOf(spell[i], index + 1);
      }
      if (index === -1) { 
        matched = false;
        break;
      }
      used[index] = true;
    }
    if (matched) { 
      foundWord = true;
      break;  
    }
    used.fill(false); 
  }
  return foundWord ? 1 : 2; 
}
