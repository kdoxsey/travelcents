chrome.storage.sync.get(['total', 'totalInt', 'roundUp', 'change'], function(result) {
    let totalSaved = 0

    function frontPage() {    
        function calcTotals() { 
            document.getElementById("total").innerHTML = `Checkout Total: ${result.total}`;
            document.getElementById("newTotal").innerHTML = `New Checkout Total: $${result.roundUp}.00`;
        }

        function createButtons() {
            function onClickButton(event) {
                function onClickNo() {
                    frontPage();
                    document.getElementById("confirmation").innerHTML = ``;
                }
                function onClickYes() {
                    totalSaved += parseFloat(result.change);
                    document.getElementById("confirmation").innerHTML = `<h4>You added ${event.target.id} to your account.</h4><button id="ok">Ok</button>`;
                    console.log(totalSaved)
                }

                // function onClickMyAccount() {
                //     document.getElementById("confirmation").innerHTML = `Total saved: $${totalSaved}`
                //     document.getElementById("total").innerHTML = ``
                //     document.getElementById("newTotal").innerHTML = ``
                //     document.getElementById("buttons").innerHTML = ``
                // }
                // function onCickOk() {
                // }
                document.getElementById("confirmation").innerHTML = `<h4 id="confirm-ask">add ${event.target.id} to your account?</h4><div id="confirm-buttons"><button id="no">no</button><button id="yes">yes</button></div>`;
                document.getElementById("total").innerHTML = ``;
                document.getElementById("newTotal").innerHTML = ``;
                document.getElementById("buttons").innerHTML = ``;
                document.getElementById("no").addEventListener("click", onClickNo)
                document.getElementById("yes").addEventListener("click", onClickYes)
                // document.getElementById("my-account").addEventListener("click", onClickMyAccount)
                console.log(event);
            }
            let buttons = [`$${result.change}`,`$1.00`,`$3.00`,`Other`];
            for(i = 0; i < buttons.length; i++) {
            var button = document.createElement("button");
            button.innerHTML = buttons[i];
            button.setAttribute("id", buttons[i]);
            button.setAttribute("class", 'btn');
            button.addEventListener("click", onClickButton)
            document.getElementById("buttons").appendChild(button);
        }
    }
    calcTotals()
    createButtons()
}

    
    frontPage();
})
