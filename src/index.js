//import {test} from './testing';

function handleSubmit(e){
  console.log(e);
  document.getElementById("root").innerHTML = "test";
  return false;
}

// listen for send event for HTML source
chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

// inject script to get source
function onWindowLoad() {

  var message = document.querySelector('#root');

  chrome.tabs.executeScript(null, {
    file: "getpagesource.bundle.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}

window.onload = onWindowLoad;
