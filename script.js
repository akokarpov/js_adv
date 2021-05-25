const goods = [
  { img: "https://picsum.photos/110?random=1", title: 'Shirt', price: 150 },
  { img: "https://picsum.photos/110?random=2", title: 'Socks', price: 50 },
  { img: "https://picsum.photos/110?random=3", title: 'Jacket', price: 350 },
  { img: "https://picsum.photos/110?random=4", title: 'Shoes', price: 250 },
]

// list = good - is a default arg.
// join("") method removed comma replaced commas with no separator.
const renderGoodsList = (list = goods) => {
  let goodsList = list.map(item =>
    `<div class="goods-item"><img src="${item.img}" alt="img"><h3>${item.title}</h3><p>${item.price}</p></div>`).join("");
  document.querySelector('.goods-list').innerHTML = goodsList;
}

const init = () => {
  renderGoodsList()
}

window.onload = init
