function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");

  //takes you to the home page if the url is empty
  if (pageID == "") {
    navToPage("home");
  } else {
    navToPage(pageID);
  }
}

function navToPage(pageName) {
  MODEL.getPageContent(pageName);
}

function initListeners() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initListeners();

  //use when developing to take your directly to the page you want to work on
  //   navToPage("contact");
});
