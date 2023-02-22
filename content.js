
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});


const ytstudio = 'https://studio.youtube.com/channel/*'


// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(ytstudio)) {
    // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });
    
    const elements = document.getElementsByClassName('table-icon typical-icon  style-scope yta-video-snapshot');


    if (nextState === "ON") {
      
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';;
      }
      
      
    } else if (nextState === "OFF") {

      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'inline';;
      }
    }
  }
});
