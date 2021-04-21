console.log('background running')
// chrome.browserAction.setBadgeText({text: "1"});
// chrome.browserAction.setBadgeBackgroundColor({color: "red"});

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    console.log(tab.id)
    let msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}