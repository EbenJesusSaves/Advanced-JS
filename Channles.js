// In the main tab
const broadcastChannel = new BroadcastChannel("tab-counter");
let tabCount = 0;

broadcastChannel.onmessage = function (event) {
  if (event.data === "tab-opened") {
    tabCount++;
    console.log("Number of tabs open:", tabCount);
  } else if (event.data === "tab-closed") {
    tabCount--;
    console.log("Number of tabs open:", tabCount);
  }
};

// In each tab
const broadcastChannel = new BroadcastChannel("tab-counter");
broadcastChannel.postMessage("tab-opened");

window.onbeforeunload = function () {
  broadcastChannel.postMessage("tab-closed");
};
