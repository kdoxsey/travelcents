let total = document.getElementsByClassName('grand-total-price').item(0).innerText
let totalInt = parseFloat(total.split('').splice(1).join('')).toFixed(2)
let roundUp = parseInt(Math.ceil(total.split('').splice(1).join('')))
let change = parseFloat(roundUp - totalInt).toFixed(2)

// alert(`Your Amazon total is ${total}. Would you like to round this purchase up to $${roundUp}.00 and add $${change} to your Travel Cents account?`)

chrome.storage.sync.set({key: total}, function() {
    // alert(`your amazon total is ${total}`)
})

