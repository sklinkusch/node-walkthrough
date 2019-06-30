exports.prepareString = input => {
  const withoutSpaces = removeWhitespace(input);
  const stringArray = withoutSpaces.split(" ");
  const resultArray = stringArray.map(string => capitalizeInitial(string));
  const result = resultArray.join("_");
  return result;
}

const removeWhitespace = input => {
  const trimmed = input.trim();
  const result = trimmed.replace(/\s+/," ");
  return result;
}

const capitalizeInitial = input => {
  return `${input.charAt(0).toUpperCase()}${input.slice(1).toLowerCase()}`;
}

