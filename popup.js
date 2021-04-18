chrome.storage.sync.get(['total', 'totalInt', 'roundUp', 'change'], function(result) {

    function calcTotal() { 
        document.getElementById("total").innerHTML = `Amazon total: ${result.total}`
        document.getElementById("change").innerHTML = `Change: $${result.change}`
        document.getElementById("newTotal").innerHTML = `New total: $${result.roundUp}.00`
        }

    calcTotal()
})
