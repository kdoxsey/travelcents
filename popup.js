chrome.storage.sync.get(['total', 'totalInt', 'roundUp', 'change'], function(result) {

    let balance = parseFloat(0)
    function homePage() {
    // this is the page that is displayed when there is no checkout page detected
        const homePageDiv = document.createElement("div")
        document.createTextNode(homePageDiv)
        document.getElementById('homePage').appendChild(homePageDiv)
    }


    function createButtons() {
    // this is the part of the savePage that creates the buttons
        function onClickButton(event) {
        // this is what happens when you click on one of the save buttons
            var change = new Audio('change.wav');
            change.play();  
            if (event.target.id === `Other`) {
            // First generate an input field if user clicked on "other"
                const otherAmountInput = document.createElement("input")
                document.getElementById('buttons').appendChild(otherAmountInput)
                return;
            }
            // this happens when a change amount save button is clicked
            balance += parseFloat(event.target.id)
            alert(`You added $${parseFloat(event.target.id).toFixed(2)} to your account. Your balance is now $${parseFloat(balance).toFixed(2)}`)
        }
        
        let buttons = [parseFloat(result.change), 1, 3, `Other`];
        for(i = 0; i < buttons.length; i++) {
            var button = document.createElement("button");
            if (typeof buttons[i] === "number" || typeof buttons[i] === "float") {
                button.innerHTML = `$${parseFloat(buttons[i]).toFixed(2)}`;
            } else {
                button.innerHTML = `${buttons[i]}`
            }
            button.setAttribute("id", buttons[i]);
            button.setAttribute("class", 'btn');
            button.addEventListener("click", onClickButton)
            document.getElementById("buttons").appendChild(button);
        }
        
    }

    function calcTotals() {
        // this is the part of the savePage that calculates the totals 
        document.getElementById("total").innerHTML = `Checkout Total: ${result.total}`;
        document.getElementById("newTotal").innerHTML = `Rounded up: ${result.roundUp}.00`;
    }

    function savePage() {    
        // this is the page that is displayed when a checkout page is detected, asking you if you want to save your change or other amounts
    calcTotals()
    createButtons()
    }

    // This is what loads by default
    savePage();
    homePage();
})
