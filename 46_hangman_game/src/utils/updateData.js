export function updateData(phrase, category, data) {
  let clonedData = JSON.parse(JSON.stringify(data));

  let updatedCategoryData = clonedData[category].map((item) => {
    return { ...item, selected: item.name === phrase ? true : item.selected };
  });

  return { ...clonedData, [category]: updatedCategoryData };
}
