const products = document.querySelectorAll('.product-container')

for (const product of products) {
    product.addEventListener('mouseover', () => {
        console.log('mouse over')
        product.classList.add('active')
    })
    product.addEventListener('mouseout', () => {
        console.log('mouse out')
        product.classList.remove('active')
    })
}