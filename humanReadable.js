/*
  Convert seconds into human readable time.
  @params seconds -> number

  @output time -> string "00:00:00"
*/

const humanReadable = (seconds) => {
  // Divide seconds by 3600 to find hours
  const hh = Math.floor(seconds / 3600);

  // take the remainder and divide by 60 to find minutes
  const mm = Math.floor((seconds % 3600) / 60);

  // take the remainder which is seconds.
  const ss = seconds % 60;

  // convert output to HH:MM:SS with string literal.
  return `${hh < 10 ? "0" + hh : hh}:${mm < 10 ? "0" + mm : mm}:${
    ss < 10 ? "0" + ss : ss
  }`;
};
