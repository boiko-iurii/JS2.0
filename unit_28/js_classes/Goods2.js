
class Goods2 extends Goods {
    constructor(name, amount, image, count, price, sale) {
        super(name, amount, image, count, price);
        this.sale = sale;
    }
    draw(elem) {
        let div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `<image src=${this.image}>`;
        div.innerHTML += `<div class="name">${this.name}</div>`;
        div.innerHTML += `<div class="price">${this.price}</div>`;
        if (this.sale)
            div.innerHTML += `<div class="sale">Распродажа</div>`;
        elem.append(div);
    }
}
