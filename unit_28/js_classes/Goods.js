
class Goods {
    constructor(name, amount, image, count, price) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
        this.price = price;
    }
    draw(elem) {
        let div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `<image src=${this.image}>`;
        div.innerHTML += `<div class="name">${this.name}</div>`;
        div.innerHTML += `<div class="price">${this.price}</div>`;
        elem.append(div);
    }
}