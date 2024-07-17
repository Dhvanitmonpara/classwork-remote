db.inventory.insertOne({
    item: 'Laptop',
    quantity: 100,
    price: 1500
})

db.inventory.create({
    item: 'Mouse',
    quantity: 50,
    price: 50
})

db.inventory.insertMany([
    { item: 'Keyboard', quantity: 200, price: 100 },
    { item: 'Monitor', quantity: 150, price: 1200 },
    { item: 'Smartphone', quantity: 80, price: 800 },
    { item: 'Tablet', quantity: 30, price: 600 },
    { item: 'Headphones', quantity: 10, price: 150 }
])

