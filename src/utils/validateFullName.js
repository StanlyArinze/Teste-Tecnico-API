const validateFullName = (fullName) => {
  const words = fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (words.length < 2) {
    return false;
  }

  return words.every((word) => word.length >= 3);
};

module.exports = validateFullName;
