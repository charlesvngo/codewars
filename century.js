// Introduction

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task

// Given a year, return the century it is in.
// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

const century = (year) => {
  const output = Math.floor(year / 100);
  return year % 100 === 0 ? output : output + 1;
};

console.log(century(1999));

// Recommended solution
// const century = year => Math.ceil(year/100)
