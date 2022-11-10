function addComma(price: string | number) {
    if (typeof price == 'number') price = price.toString();
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default addComma;