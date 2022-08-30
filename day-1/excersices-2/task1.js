// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))


const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  const productPrice =products.map((item)=>item.price )
