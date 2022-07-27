function headerFunction(){
    nav.classList.toggle('none')
}
function showNav() {
    headerFunction()
}

const wallets = ['trustwallet', 'securewallet','metamask','safepal', 'IMToken', 'atomic', 'math']
let paras = document.querySelectorAll('p')
paras.forEach(para => {
    for(let i = 0; i < wallets.length; i++){
        para.innerHTML += `<p>${i}</p>`
    }
    para.addEventListener('click', () => {
        console.log(para.innerHTML)
    })
})
const person = { firstname:'ade', lastname:'mola', country:'naija'}
console.log(person.country)
