// 1.	Добавьте пустые классы для Корзины товаров и Элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.

// 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.

class goodsItem {
  constructor(img = "", title = "", amount = 0, price = 0, coupon = "") {
    this.img = img;
    this.title = title;
    this.amount = amount;
    this.price = price;
    this.coupon = coupon;
  }

  addAmount() { this.amount += 1; }

  removeAmount() { if (this.amount > 0) { this.amount -= 1 }; }
}

class basket {
  constructor() {
    this.goodsList = [];
    this.totalPrice = 0;
  }

  addToBasket(goodsItem) {
    this.goodsList.push(goodsItem);
  }

  fetchGoodsList() {
    this.goodsList = [
      { img: "https://picsum.photos/110?random=1", title: 'Shirt', amount: 1, price: 150, coupon: "" },
      { img: "https://picsum.photos/110?random=2", title: 'Socks', amount: 1, price: 50, coupon: "" },
      { img: "https://picsum.photos/110?random=3", title: 'Jacket', amount: 5, price: 350, coupon: "" },
      { img: "https://picsum.photos/110?random=4", title: 'Shoes', amount: 3, price: 250, coupon: "" },
    ];
  }

  updateTotalPrice() {
    this.goodsList.forEach(element => { this.totalPrice += (element.amount * element.price); });
    console.log(this.totalPrice);
  }

  renderGoodsList() {
    let list = this.goodsList.map(obj =>
      `<div class="goods-item"><img src="${obj.img}" alt="img"><h3>${obj.title}</h3><p>${obj.amount}</p><p>${obj.price}</p><h3>${obj.amount * obj.price}</h3></div>`).join("");
    document.querySelector('.goods-list').innerHTML = list;
  }
}


const toppings = [
  { name: "pepper", price: 5, amount: 1, calories: 0 },
  { name: "mayonese", price: 15, amount: 1, calories: 10 },
  { name: "ketchup", price: 10, amount: 1, calories: 5 }
];

const stuffings = [
  { name: "meat", price: 100, calories: 120 },
  { name: "cheese", price: 60, calories: 100 },
  { name: "potato", price: 50, calories: 80 }
];

// 3. Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
class burger {
  constructor(size = "big", stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.totalPrice = this.stuffing.price;
    this.toppingsList = [];
    this.calories = this.stuffing.calories;
  }

  addTopping(...topping) {
    this.toppingsList.push(...topping)
  }

  removeTopping(topping) {
    if (this.toppingsList.includes(topping)) {
      const index = this.toppingsList.indexOf(topping);
      this.toppingsList.splice(index, 1)
    }
  }

  showToppings() {
    for (let topping of this.toppingsList) {
      console.log(topping.name)
    }
  }

  showSize() { console.log(this.size) }
  showStuffing() { console.log(this.stuffing.name) }

  showPrice() {
    this.toppingsList.forEach(topping => { this.totalPrice += (topping.amount * topping.price); });
    console.log(this.totalPrice);
  }

  showCalories() {
    this.toppingsList.forEach(topping => { this.calories += (topping.amount * topping.calories); });
    console.log(this.calories);
  }
}


const init = () => {
  const basketObj = new basket;
  basketObj.fetchGoodsList();
  basketObj.updateTotalPrice();
  basketObj.renderGoodsList();

  const burgerObj = new burger("small", stuffings[0]);
  burgerObj.addTopping(toppings[0], toppings[1], toppings[2]);
  burgerObj.showSize();
  burgerObj.showStuffing();
  burgerObj.showToppings();
  burgerObj.showCalories();
  burgerObj.showPrice();
  burgerObj.removeTopping(toppings[0]);
  burgerObj.showToppings();
}

window.onload = init
