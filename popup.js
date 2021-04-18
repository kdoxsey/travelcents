chrome.storage.sync.get(['total', 'totalInt', 'roundUp', 'change'], function(result) {

    function calcTotal() { 
        document.getElementById("total").innerHTML = `Current total: ${result.total}`
        document.getElementById("change").innerHTML = `Change: $${result.change}`
        document.getElementById("newTotal").innerHTML = `New total: $${result.roundUp}.00`
    }
    
    function createButtons() {
    var buttons = [`$${result.change}`,`$1.00`,`$3.00`,`Other`];
    for(i = 0; i < buttons.length; i++) {
    var button = document.createElement("button");
    button.innerHTML = buttons[i];
    document.getElementById("content").appendChild(button);
  }
    }

    calcTotal()
    createButtons()
})
