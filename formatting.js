const removeWhitespace = input => {
  const trimmed = input.trim();
  const result = trimmed.replace(/\s+/," ");
  return result;
}

const capitalizeInitial = input => {
  return `${input.charAt(0).toUpperCase()}${input.slice(1).toLowerCase()}`;
}

console.log(capitalizeInitial('kuala  lumpur    '));
