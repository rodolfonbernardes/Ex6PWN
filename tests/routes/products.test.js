const expect = require('chai').expect;
const { get, getById, post } = require('../../routes/productsController');

let req = {
    body: {},
    params: {},
};

const res = {
    jsonCalledWith: {},
    json(arg) {
        this.jsonCalledWith = arg
    }
}
describe('Products Route', function () {
    describe('get() function', function () {
        it('should return object with title ', function () {
            get(req, res);
            expect(res.jsonCalledWith).to.be.eql({ title: 'Products page' });
        });
        it('should receive return by id ', function () {
            const getReq = req;
            getReq.params = {
                id: 1
            };
            getById(getReq, res);
            expect(res.jsonCalledWith).to.be.have.key('success')
        });
        it('test price ', function () {
            const getReq = req;
            getReq.body = {
                id: 1,
                name: 'Produto 1',
                description: 'Descrição do produto 1',
                price: -50.00
            };
            post(getReq, res);
            expect(res.jsonCalledWith).to.be.eql({ error: 'Preço inválido: preço menor ou igual a 0' })
        });
        it('test description ', function () {
            const getReq = req;
            getReq.body = {
                id: 1,
                name: 'Produto 1',
                description: 'ProdX',
                price: 50.00
            };
            post(getReq, res);
            expect(res.jsonCalledWith).to.be.eql({ error: 'Description < 10' })
        });

    })
});