export const randomizer = (array:any) => {
  const randomElement = Math.floor(Math.random() * array.length)
  const result = array[randomElement];



  return result;
}

