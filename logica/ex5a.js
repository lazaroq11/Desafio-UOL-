function FilterlistWine() {
  const elements = document.querySelectorAll('.js-productClick[title][data-product-sku]');

  const elementsFilter = Array.from(elements).filter(element => {
    const data = Number(element.getAttribute('data-product-sku'));
    return data && data % 3 === 0;
  });
  console.log(elementsFilter);

  elementsFilter.forEach(element => {
    console.log(element);
  });
}

FilterlistWine();
