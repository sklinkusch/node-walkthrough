const removeWhitespace = input => {
  const trimmed = input.trim();
  const result = trimmed.replace(/\s+/," ");
  return result;
}


console.log(removeWhitespace('  kuala  lumpur    '));
