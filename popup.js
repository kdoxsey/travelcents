chrome.storage.sync.get(['total', 'totalInt', 'roundUp', 'change'], function(result) {
    alert(`Hello from popup.js! Your Amazon total is ${result.total}. Would you like to round this purchase up to $${result.roundUp}.00 and add $${result.change} to your Travel Cents account?`)
})
