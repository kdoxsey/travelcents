// console.log('background running')
// chrome.browserAction.setBadgeText({text: "1"});
// chrome.browserAction.setBadgeBackgroundColor({color: "red"});



// var currentURL;

// chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, 
// function(tabs){
// 	getCurrentURL(tabs[0].url);
// });

// function getCurrentURL(tab){
// 	currentURL = tab;
// }
// chrome.storage.sync.set({'currentURL': currentURL})

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}