const USD = 5.64
const EUR = 6.43
const GBP = 7.56

const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')

amount.addEventListener('input', () => {
    const hasCaractersRegex = /\D+/g

    amount.value = amount.value.replace(hasCaractersRegex, "")
})

form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case 'USD': 
            convertCurrency(amount.value, USD, 'US$')
            break
        case 'EUR':
            convertCurrency(amount.value, EUR, '€')
            break
        case 'GBP':
            convertCurrency(amount.value, GBP, '£')
            break
    }
}

/**
 * 
 * @param {Number} amount quantia que o usúario vai desejar converter
 * @param {Number} price preço da moeda selecionada
 * @param {String} symbol símbolo da moeda selecionada
 */
function convertCurrency(amount, price, symbol) {
    console.log(amount, price, symbol)
}