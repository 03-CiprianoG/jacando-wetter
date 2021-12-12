function getDayString(day) {
  switch (day) {
    case 0:
      return "Samstag";
    case 1:
      return "Sonntag";
    case 2:
      return "Montag";
    case 3:
      return "Dienstag";
    case 4:
      return "Mittwoch";
    case 5:
      return "Donnerstag";
    case 6:
      return "Freitag";
  }
}

module.exports = {
  getDayString,
};
