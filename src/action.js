document.addEventListener('DOMContentLoaded', function () {
  var links = document.getElementsByTagName("button");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      var app = this.getAttribute("data-app");
      var role = encodeURIComponent(this.getAttribute("data-role"));
      var location = `https://productboard.teleport.sh/web/launch/${app}.productboard.teleport.sh/productboard.teleport.sh/${app}.productboard.teleport.sh/${role}`
      chrome.cookies.remove({ "url": "https://.signin.aws.amazon.com/", "name": "aws-creds" });
      chrome.tabs.create({ active: true, url: location });
    };
  }
});