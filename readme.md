## General instructions:

- Run the following command to install node_modules and required packages to run the server:
```
yarn 
```

- Run the following command to start up the server:
```
node app.js
```

- Server runs on `localhost:4000`

- Run the following command to run the unit tests
```
yarn test
```
---

&nbsp;

## Routes for the various CRUD operations

### Route - GET shopping list:

- GET **localhost:4000/allList**

- #### Request:

```json
Nothing sent to backend
```

- #### Response:

```json
{
  "data": [
    {
      "id": "123",
      "item": "Eggs",
      "checked": false
    }
  ],
  "error": null
}
```

---

&nbsp;

### Route - Add shopping list:

- POST **localhost:4000/addList**
- #### Request:

```json
{
  "id": "1234",
  "item": "Milk",
  "checked": true
}
```

- #### Response:

```json
{
  "data": [
    {
      "id": "1234",
      "item": "Milk",
      "checked": true
    }
  ],
  "error": null
}
```

---

&nbsp;

### Route - Delete shopping list by passing in an id:

- DELETE **localhost:4000/list/:id**
- #### Request:

```json
Nothing in request body
```

- #### Response:

```json
{
  "data": [
    {
      "id": "123",
      "item": "Eggs",
      "checked": false
    }
  ],
  "error": null
}
```
