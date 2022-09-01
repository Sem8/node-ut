const express = require("express");
const app = express();

app.use(express.json());

const shoppingList = [];

// Get all shopping list
app.get("/allList", (req, res) => {
  return res.status(200).json({
    data: shoppingList,
    error: null,
  });
});

app.post("/addList", (req, res) => {
  try {
    const { id, item, checked } = req.body;

    const newShoppingList = {
      id,
      item,
      checked,
    };
    shoppingList.push(newShoppingList);

    return res.status(200).json({
      data: shoppingList,
      error: null,
    });
  } catch (err) {
    return res.status(500).json({
      data: null,
      error: err,
    });
  }
});

app.delete("/list/:id", (req, res) => {
  try {
    const id = req.params.id;

    const itemIndex = shoppingList.findIndex((item) => {
      return item.id === id;
    });

    shoppingList.splice(itemIndex, 1);
    return res.status(200).json({
      data: shoppingList,
      error: null,
    });
  } catch (err) {
    return res.status(500).json({
      data: null,
      error: err,
    });
  }
});

app.listen(4000, () => {
  console.log("Listen on the port 4000...");
});
