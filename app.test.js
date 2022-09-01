const request = require("supertest");
const crypto = require('crypto');
const baseURL = "http://localhost:4000"

// Test get all shopping list endpoint
describe('Get /allList', () => {
    const newShoppingList = {
        id: crypto.randomUUID(),
        item: 'Eggs',
        checked: false,
    };

    // Add a new shopping list item, the newShoppingList object before each test
    beforeAll(async () => {
        // set up the shopping list
        await request(baseURL).post('/addList').send(newShoppingList);
    });

    // Delete the newShoppingList object after each test
    afterAll(async () => {
        await request(baseURL).delete(`/list/${newShoppingList.id}`)
    });

    it('should return 200', async () => {
        const res = await request(baseURL).get('/allList');
        expect(res.statusCode).toBe(200);
        expect(res.body.error).toBe(null);
    });

    it('should return shopping list', async () => {
        const res = await request(baseURL).get('/allList');
        expect(res.body.data.length >= 1).toBe(true);
    })
});

// Test adding a new shopping list item endpoint
describe('POST /addList', () => {
    const newShoppingList = {
        id: crypto.randomUUID(),
        item: 'Milk',
        checked: true,
    };

    // Delete the newShoppingList object after each test
    afterAll(async () => {
        await request(baseURL).delete(`/list/${newShoppingList.id}`)
    });


    it('should add a shopping list to shopping list array', async () => {
        const res = await request(baseURL).post('/addList').send(newShoppingList);
        const lastItem = res.body.data[res.body.data.length -1]
        expect(res.statusCode).toBe(200);
        expect(lastItem.item).toBe(newShoppingList['item']);
        expect(lastItem.checked).toBe(newShoppingList['checked']);
    })
});

// Test deleting a shopping list item endpoint
describe('DELETE an item from shopping list', () => {
    const newShoppingList = {
        id: crypto.randomUUID(),
        item: 'Spinach',
        checked: true,
    };

    // Add a new shopping item to delete first before running the delete test
    beforeAll( async () => {
        await request(baseURL).post('/addList').send(newShoppingList);
    });

    it('should delete one item from shopping list', async() => {
        const res = await request(baseURL).delete(`/list/${newShoppingList.id}`);

        const shoppingList = res.body.data;
        console.log(shoppingList);

        const found = shoppingList.find(eachitem => {
            newShoppingList.id == eachitem.id;
        });
        expect(found).toBe(undefined);
    })
})