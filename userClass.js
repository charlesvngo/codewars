class User {
  constructor() {
    this.ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
    this.rankIndex = 0;

    this.rank = this.ranks[this.rankIndex];
    this.progress = 0;
  }

  incProgress(questionRank) {
    let d;
    if (questionRank < -8 || questionRank === 0 || questionRank > 8)
      console.error("Error: Rank does not exist");
    if (this.rank > questionRank) {
      this.progress += 1;
    } else if (this.rank === questionRank) {
      this.progress += 3;
    } else {
      d = this.ranks.indexOf(questionRank) - this.rankIndex;
      this.progress += 10 * d * d;
    }
    while (this.progress >= 100) {
      this.rankIndex++;
      this.rank = this.ranks[this.rankIndex];
      this.progress -= 100;
    }
    if (this.rank === 8) {
      this.progress = 0;
    }
  }
}

const Jim = new User();

console.log(Jim.rank);

Jim.incProgress(-9);

Jim.incProgress();
console.log(Jim.rank);
