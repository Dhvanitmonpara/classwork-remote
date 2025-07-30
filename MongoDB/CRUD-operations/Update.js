// update documents

db.inventory.updateOne(
    { item: "Laptop" },
    { $set: { quantity: 80 } }
)

db.inventory.updateMany(
    { price: { $lt: 1000 } },
    { $set: { quantity: 0 } }
)

db.inventory.findOneAndUpdate(
    {
        item: "Monitor"
    },
    {
        $set: { price: 1300 },
        $inc: { quantity: -5 }
    },
    {
        returnNewDocument: true,
        returnOriginal: false
    }

)

db.inventory.updateOne(
    { item: "Headphones" },
    {
        $set: { price: 1.1 },
        $currentDate: { lastModified: true }
    }
)

db.inventory.updateMany(
    { quantity: 0 },
    {
        $unset: { quantity: 1 },
        $set: { status: "Out of stock" }
    }
)

// replace the whole document with new data

db.inventory.replaceOne(
    { item: "Mouse" },
    { $inc: { quantity: 10 } }
)

db.inventory.findOneAndReplace(
    { item: "Smartphone" },
    { $mul: { price: 1.1 } },
    { upsert: true }
)