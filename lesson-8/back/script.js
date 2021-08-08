
function timeStamp(action, item) {

  const date = new Date();
  const loggedEntry = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${action} ${item.product_name}`;

  fs.readFile("stats.json", "utf-8", (err, data) => {
    if (err) {
      res.send('{"result": 0}');
    } else {
      const stats = JSON.parse(data);
      stats.push(loggedEntry);
      fs.writeFileSync('stats.json', JSON.stringify(stats));
    }
  });

}

const express = require("express");
const bodyParser = require('body-parser');
const fs = require("fs");
var cors = require('cors')

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(express.static("."));
app.use(cors())

app.listen(3000, () => {
  console.log("server is running at port 3000!!");
});

app.get('/cartData', (req, res) => {
  fs.readFile('cart.json', 'utf-8', (err, data) => {
    res.send(data)
  })
})

app.get("/catalogData", (req, res) => {
  fs.readFile("catalogData.json", "utf-8", (err, data) => {
    res.send(data);
  });
});

app.post("/addToBasket", (req, res) => {
  fs.readFile("cart.json", "utf-8", (err, data) => {
    if (err) {
      res.send('{"result": 0}');
    } else {
      const cart = JSON.parse(data);
      const item = req.body;

      cart.push(item);
      timeStamp("added", item);

      fs.writeFile("cart.json", JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      });
    }
  });
});

app.post("/remFromBasket", (req, res) => {
  fs.readFile("cart.json", "utf-8", (err, data) => {
    if (err) {
      res.send('{"result": 0}');
    } else {
      const cart = JSON.parse(data);
      const item = req.body;

      for (let good of cart) {

        if (good.product_name === item.product_name) {
          const i = cart.indexOf(good);
          cart.splice(i, 1);
          timeStamp("removed", item);
          break;
        }

      }

      fs.writeFile("cart.json", JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      });
    }
  });
});