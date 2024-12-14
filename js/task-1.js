const allCategories = document.querySelector('#categories');
const oneCategory = allCategories.querySelectorAll('.item');

console.log(`Number of categories: ${oneCategory.length}`);

oneCategory.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const categoryListItem = item.querySelectorAll('ul li');

  console.log(`Category: ${title}`);
  console.log(`Elements: ${categoryListItem.length}`);
});
