chrome.storage.sync.get(['total', 'totalInt', 'roundUp', 'change'], function(result) {

    function calcTotal() { 
        document.getElementById("total").innerHTML = `Amazon total: ${result.total}`
        document.getElementById("change").innerHTML = `Change: $${result.change}`
        document.getElementById("newTotal").innerHTML = `New total: $${result.roundUp}.00`
    }
    
    function createButtons() {
        const btn = document.createElement('BUTTON');
        // btn.textContent('hello')
        document.body.appendChild(btn)
        btn.appendChild(document.createTextNode(`$${result.change}`))
    }

    calcTotal()
    createButtons()
})
