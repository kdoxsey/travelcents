chrome.storage.sync.get(['total', 'totalInt', 'roundUp', 'change'], function(result) {
    let balance = 0

    function frontPage() {    
        function calcTotals() { 
            document.getElementById("total").innerHTML = `Checkout Total: ${result.total}`;
            document.getElementById("newTotal").innerHTML = `New Checkout Total: $${result.roundUp}.00`;
        }

        function createButtons() {
            function onClick(event) {
                function onClickNo() {
                    frontPage();
                    document.getElementById("confirmation").innerHTML = ``;
                }
                function onClickYes() {
                    frontPage();
                    balance += parseFloat(result.change);
                    console.log(balance)
                }
                document.getElementById("confirmation").innerHTML = `<h4 id="confirm-ask">add $${result.change} to your account?</h4><div id="confirm-buttons"><button id="no">no</button><button id="yes">yes</button></div>`;
                document.getElementById("total").innerHTML = ``;
                document.getElementById("newTotal").innerHTML = ``;
                document.getElementById("buttons").innerHTML = ``;
                document.getElementById("no").addEventListener("click", onClickNo)
                document.getElementById("yes").addEventListener("click", onClickYes)
                console.log(event);
            }
            let buttons = [`$${result.change}`,`$1.00`,`$3.00`,`Other`];
            for(i = 0; i < buttons.length; i++) {
            var button = document.createElement("button");
            button.innerHTML = buttons[i];
            button.setAttribute("id", buttons[i]);
            button.setAttribute("class", 'btn');
            button.addEventListener("click", onClick)
            document.getElementById("buttons").appendChild(button);
        }
    }
    calcTotals()
    createButtons()
}
    
    frontPage();
})
