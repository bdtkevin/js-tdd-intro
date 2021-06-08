const capitalizeFirstLetters = (input) =>
  input.replace(/\b\w/g, (char) => char.toUpperCase());

module.exports = capitalizeFirstLetters;
