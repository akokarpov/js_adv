// 1. Добавьте в соответствующие классы методы добавления товара в корзину, удаления товара из корзины и получения списка товаров корзины. Добавить кнопку "Добавить в корзину" для товаров из каталога, чтобы при нажатии ваш товар попадал в корзину.
// 2*. Изучить EventLoop в JavaScript

const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

class goodsItem {
  constructor(title, price, id) {
    this.title = title;
    this.price = price;
    this.id = id;
  }
  render() {
    return `<div class="goods-item" itemId=${this.id}><img src="https://picsum.photos/110" alt="img"><h3>${this.title}</h3><p>${this.price} руб.</p><button class="item-button-add" type="button">&#43;</button><button class="item-button-rem" type="button">&mdash;</button></div>`;
  }
}

class goodsList {
  constructor() {
    this.goods = [];
  }

  async fetchGoods() {
    const response = await fetch(`${API_URL}/catalogData.json`);
    if (response.ok) {
      this.goods = await response.json();
      console.log(this.goods);
    } else {
      alert("error connecting to server");
    }
  }

  render() {
    let listHtml = "";
    this.goods.forEach((good) => {
      const item = new goodsItem(
        good.product_name,
        good.price,
        good.id_product,
      );
      listHtml += item.render();
    });
    document.querySelector(".goods-list").innerHTML = listHtml;
  }
}

class basket {
  constructor() {
    this.goods = [];
    this.totalPrice = 0;
  }

  add(item) {
    this.goods.push(item);
    this.updatePrice();
  }

  remove(item) {
    if (this.goods.includes(item)) {
      const i = this.goods.indexOf(item);
      this.goods.splice(i, 1);
      this.updatePrice();
    }
  }

  updatePrice() {
    this.totalPrice = 0;
    this.goods.forEach(element => { this.totalPrice += element.price; });
    this.render();
    console.log(this.goods, this.totalPrice);
  }

  render() {
    document.querySelector(".cart").innerHTML = `Общая стоимость: ${this.totalPrice} руб.`;
  }
}

const init = async () => {
  const goodsListObj = new goodsList();
  await goodsListObj.fetchGoods();
  goodsListObj.render();
  const basketObj = new basket();
  const btnAdd = document.getElementsByClassName('item-button-add');
  const btnRem = document.getElementsByClassName('item-button-rem');
  basketObj.render();

  for (let i = 0; i < btnAdd.length; i++) {
    btnAdd[i].addEventListener("click", function () {
      basketObj.add(goodsListObj.goods[i]);
    });
    btnRem[i].addEventListener("click", function () {
      basketObj.remove(goodsListObj.goods[i]);
    });
  }
}

window.onload = init