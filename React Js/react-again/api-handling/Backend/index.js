import express from "express"
const app = express()
const port = process.env.PORT || 3000

app.get('/api/products', (req, res) => {
    const products = [
        {
            "id": 1,
            "name": "Wireless Mouse",
            "image": "https://example.com/images/wireless-mouse.jpg",
            "price": 29.99
        },
        {
            "id": 2,
            "name": "Bluetooth Headphones",
            "image": "https://example.com/images/bluetooth-headphones.jpg",
            "price": 59.99
        },
        {
            "id": 3,
            "name": "USB-C Hub",
            "image": "https://example.com/images/usb-c-hub.jpg",
            "price": 19.99
        },
        {
            "id": 4,
            "name": "Mechanical Keyboard",
            "image": "https://example.com/images/mechanical-keyboard.jpg",
            "price": 89.99
        },
        {
            "id": 5,
            "name": "4K Monitor",
            "image": "https://example.com/images/4k-monitor.jpg",
            "price": 399.99
        }
    ]

    // http://localhost:3000/api/products?search=USB

    if (req.query.search) {
        const filteredProducts = products.filter((product) => (product.name.includes(req.query.search)))
        res.send(filteredProducts)
        return;
    }

    setTimeout(() => {
        res.send(products)
    }, 3000);

})

app.listen(port, () => {
    console.log(`Server is listening to http://localhost:${port}`)
    console.log(`Api is http://localhost:${port}/api/products`)
})