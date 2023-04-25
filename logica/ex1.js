function showSequence() {
  for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log('TechOps');
    } else if (num % 3 === 0) {
      console.log('Tech');
    } else if (num % 5 === 0) {
      console.log('Ops');
    } else {
      console.log(num);
    }
  }
}

showSequence();
