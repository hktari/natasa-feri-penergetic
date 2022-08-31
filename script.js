const products = document.querySelectorAll('.product-container')

for (const product of products) {
    product.addEventListener('mouseover', () => {
        console.log('mouse over')
        product.querySelector('.product-title').classList.add('active')
        product.querySelector('.product-text').classList.remove('w3-hide')
        product.querySelector('img').classList.add('inactive')
    })
    product.addEventListener('mouseout', () => {
        console.log('mouse out')
        product.querySelector('.product-title').classList.remove('active')
        product.querySelector('.product-text').classList.add('w3-hide')
        product.querySelector('img').classList.remove('inactive')
    })
}