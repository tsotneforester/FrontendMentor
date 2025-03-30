export function choosePhrase(data, category) {
  let categoryData = data[category].filter((e) => !e.selected);

  if (categoryData.length == 0) {
    categoryData = data[category];
  }

  const randomIndex = Math.floor(Math.random() * categoryData.length);
  return categoryData[randomIndex].name;
}
