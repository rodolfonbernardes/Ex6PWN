let products = {
    items: [
        {
            id: 1,
            name: 'Produto 1',
            description: 'Descrição do produto 1',
            price: 50.00
        }
    ]
}
module.exports = {
    post(req, res) {
        if (req.body.description.length < 10) {
            return res.json({ error: 'Não permitido: descrição possui menos que 10 caracteres.' })
        }
        if (req.body.price <= 0) {
            return res.json({ error: 'Não permitido: valor do preço é menor que 0' })
        }
        products.items.push(req.body);
        res.json({ success: 'Produto inserido com sucesso.' })
    },
    get(_, res) {
        res.json({ title: 'Products page' });
    },
    getById(req, res) {
        if (!req.params.id) {
            res.json({ error: 'Should receive an id' })
        }

        res.json({ success: 'Id received!' })
    }    
};
