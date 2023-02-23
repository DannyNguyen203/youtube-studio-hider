const ytstudio = 'https://studio.youtube.com/channel';


// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(ytstudio)) {
     function() {
      // Manipulate elements here
      var elements = document.getElementsByClassName('table-icon typical-icon  style-scope yta-video-snapshot');
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';;
      }
    }
});
