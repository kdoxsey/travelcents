chrome.storage.sync.get(['key'], function(result) {
    alert(`hello from popup.js! your amazon total is ${result.key}`)
})

// alert('test')