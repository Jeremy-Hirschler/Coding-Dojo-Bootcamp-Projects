const ProductController = require('../controllers/product.controller');


module.exports = (app) => {
    app.get('/api/products', ProductController.findAll);
    app.post('/api/products', ProductController.addProduct);
    app.get('/api/products/:id', ProductController.findSingle);
    app.put('/api/products/edit/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}