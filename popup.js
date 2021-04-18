chrome.storage.sync.get(['total', 'totalInt', 'roundUp', 'change'], function(result) {

    function calcTotal() { 
        document.getElementById("total").innerHTML = `Checkout Total: ${result.total}`;
        // document.getElementById("change").innerHTML = `Change: $${result.change}`;
        document.getElementById("newTotal").innerHTML = `New Checkout Total: $${result.roundUp}.00`;
    }

    function onClick() {
        document.getElementById("content").innerHTML = `Add $${result.change} to your account?`;
    }
    
    function createButtons() {
        var buttons = [`$${result.change}`,`$1.00`,`$3.00`,`Other`];
        for(i = 0; i < buttons.length; i++) {
            var button = document.createElement("button");
            button.innerHTML = buttons[i];
            button.setAttribute("id", buttons[i]);
            button.setAttribute("class", 'btn');
            document.getElementById("content").appendChild(button);
            button.addEventListener("click", onClick)
        }
    }

    calcTotal();
    createButtons();
})
