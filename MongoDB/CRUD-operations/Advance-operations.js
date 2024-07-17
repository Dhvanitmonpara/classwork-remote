db.inventory.find().toArray((err, docs) => {
    if (err) throw err;
    console.log(docs);
    db.close(); // Close the connection to the MongoDB server when done
})

