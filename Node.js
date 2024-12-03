const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Produk contoh
const products = [
    { id: 1, name: "Produk 1", price: 50 },
    { id: 2, name: "Produk 2", price: 75 },
];

// API Produk
app.get('/api/products', (req, res) => {
    res.json(products);
});

// API Pesanan
app.post('/api/order', (req, res) => {
    const { productId, quantity } = req.body;
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).send("Produk tidak dijumpai.");
    }

    const total = product.price * quantity;
    res.json({ message: "Pesanan berjaya!", total });
});

// Jalankan server
app.listen(port, () => {
    console.log(Server berjalan di http://localhost:${port});
});