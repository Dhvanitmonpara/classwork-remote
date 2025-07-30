db.inventory.find() // Fetch all items

db.inventory.find({
    quantity: 150
})

db.inventory.find({
    status: { $in: ['out of stock', 'low stock'] }
})

db.inventory.find({
    price: { $gte: 1000, $lte: 2000 } // lte stands for less than or equal to and gte stands for greater than or equal to
})

db.inventory.find({
    item: {
        $or: [
            { item: "Laptop" },
            { item: "Mouse" }
        ]
    }
})

db.inventory.findOne({
    item: "Laptop"
})

db.inventory.findMany({
    price: { $gt: 1000 }
})

// sorting

db.inventory.find().sort({ price: 1 }) // ascending order

db.inventory.find().sort({ price: -1 }) // descending order

// pagination

db.inventory.find().skip(0).limit(5) // skip first 0 documents and limit output to 5 documents

// page no 1 to 5
db.inventory.find().sort({ price: 1 }).skip(0).limit(5) // sort by price in ascending order and skip first 0 documents and limit output to 5 documents
// page no 6 to 10
db.inventory.find().sort({ price: 1 }).skip(5).limit(5) // sort
// page no 11 to 15
db.inventory.find().sort({ price: 1 }).skip(10).limit(5)
// page no 16 to 20
db.inventory.find().sort({ price: 1 }).skip(15).limit(5)

// pagination with filtering

db.inventory.find({ price: { $gt: 1000 } }).sort({ price: 1 }).skip(0).limit(5)