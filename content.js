let total = document.getElementsByClassName('grand-total-price').item(0).innerText
let totalInt = parseFloat(total.split('').splice(1).join('')).toFixed(2)
let roundUp = parseInt(Math.ceil(total.split('').splice(1).join('')))
let change = parseFloat(roundUp - totalInt).toFixed(2)

chrome.storage.sync.set({'total': total,'totalInt': totalInt, 'roundUp': roundUp, 'change': change})

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt)
}
