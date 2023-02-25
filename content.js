console.log("Test");
document.addEventListener("DOMContentLoaded", function() {
  // Check if we're on a YouTube Studio page
  console.log("Test 2");
  if (window.location.href.includes("studio.youtube.com")) {
    hideIcons();
  }
});

function hideIcons() {
  console.log("Test3")
  const elements = document.getElementsByClassName('table-icon typical-icon  style-scope yta-video-snapshot');
  const elements2 = document.getElementsByClassName('metric-trend narrow metric-table-cell style-scope ytcd-channel-facts-item style-scope ytcd-channel-facts-item');

  // Hide the element
  for(let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  for(let i = 0; i < elements2.length; i++) {
    elements2[i].style.cssText = "display:none !important";
  }
  console.log("Test4");
}
