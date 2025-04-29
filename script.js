const USD = 5.64
const EUR = 6.43
const GBP = 7.56

const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

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
    try {
        description.textContent = `1 ${symbol} equivale a = ${formatCurrencyBRL(price)}`

        let total = amount * price
        result.textContent = total

        footer.classList.add('show-result')
    } catch (error) {
        footer.classList.remove('show-result')

        console.log(error)
        alert('Não foi possível converter, por favor, verifique se você digitou ou fez alguma coisa errada!')
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
}