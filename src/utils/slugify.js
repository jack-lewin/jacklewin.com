export default str =>
  str
    .split('')
    .reduce((prevSlug, nextChar) => prevSlug + nextChar.replace(/[^\w\s()-]/g, ''), '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase();
