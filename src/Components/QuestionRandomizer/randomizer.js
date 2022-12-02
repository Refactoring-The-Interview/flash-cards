const randomizer = (array) => {
  const randomElement = Math.floor(Math.random() * array.length)
  const result = array[randomElement];



  return result;
}

export default randomizer;