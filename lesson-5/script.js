const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({

  el: "#app",

  data: {
    goods: [],
    filteredGoods: [],
    searchLine: "",
    basket: [],
    totalPrice: 0,
  },

  methods: {

    async fetchGoods() {
      const response = await fetch(`${API_URL}/catalogData.json`);
      if (response.ok) {
        this.goods = await response.json();
        this.filteredGoods = this.goods;
      } else {
        alert("error connecting to server");
      }
    },

    filterGoods() {
      this.filteredGoods = [];
      this.goods.forEach(good => {

        if (this.searchLine.toLowerCase() === good.product_name.toLowerCase()) {
          this.filteredGoods.push(good);

        } else if (this.searchLine === "") {
          this.filteredGoods = this.goods;
        }

      });
    },

    addToBasket(e) {
      const addedGoodId = Number(e.path[1].childNodes[2].textContent)
      this.goods.forEach(good => {
        if (good.id_product === addedGoodId) {
          this.basket.push(good);
        }
      })
      this.updatePrice();
      console.log(this.basket);
    },

    removeFromBasket(e) {
      const removedGoodId = Number(e.path[1].childNodes[2].textContent)
      for (good of this.basket) {
        if (good.id_product === removedGoodId) {
          const i = this.basket.indexOf(good);
          this.basket.splice(i, 1);
          this.updatePrice();
          break;
        }
      }
      console.log(this.basket);
    },

    updatePrice() {
      this.totalPrice = 0;
      this.basket.forEach(good => { this.totalPrice += good.price; });
    }

  },

  mounted() {
    this.fetchGoods();
  },

});

document.querySelector(".search-button").addEventListener("click", app.filterGoods);