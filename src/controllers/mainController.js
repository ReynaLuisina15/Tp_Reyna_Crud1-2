const {loadProducts} = require ('../data/productsModule');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		const products = loadProducts();
		const inSale = products.filter(product => product.category === 'in-sale');
		const visited = products.filter(product => product.category === 'visited');
		return res.render ('index', {
			inSale,
			visited,
			toThousand
		})
	},
	search: (req, res) => {
		const products = loadProducts();
		const result = products.filter(product => product.name.toLowerCase().includes(req.query.keywords.toLowerCase()));

		return res.render('result', {
			products : result,
			keywords : req.query.keywords
		})
	},
};

module.exports = controller;
