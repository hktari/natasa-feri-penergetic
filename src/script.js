const products = document.querySelectorAll('.product-container')
const contactBtn = document.querySelector('#cta .btn')
const contact = document.querySelector('.contact-container')

contactBtn.addEventListener('click', () => {
    contact.classList.add('show')
    contactBtn.hidden = true;
    contact.hidden = false;
    window.scroll({
        top: window.outerHeight,
        left: 0,
        behavior: 'smooth'
    });
})

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