db.inventory.deleteOne({ item: "Keyboard" }, (err, result) => { 
    // this is callback function
    if (err) throw err;
    console.log("Document deleted:", result.deletedCount);
})

db.inventory.deleteMany(
    { item: "Laptop", price: { $lt: 1500 } },
)

db.inventory.findOneAndDelete(
    { item: "Monitor" },
    { sort: { price: -1 } },
)

// it returns the deleted document whereas deleteOne and deleteMany return the number of deleted documents

db.inventory.remove(
    {item: "Mouse" }
) 
