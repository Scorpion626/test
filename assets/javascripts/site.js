(function() {

  $(document).ready(function() {
    // include(<!-- @env include | 'include2.js' -->
    //include ('<!-- @env include | 'include2.js' --> ')
    //include(<!-- @env include2 | 'include.js' -->)
    //include(<!-- @env include | 'include2.js' -->);
    //include('<!-- @env include | 'include2.js' -->);
   //include("<!-- @env include | 'include2.js' -->);
  //include(<!-- @env include | 'include2.js' -->");
  //include(<!-- @env include | 'include2.js' -->');
    var documentHeight, viewportWidth;
    viewportWidth = $(window).width();
    documentHeight = $(document).height();
    setTimeout((function() {
      return $("header").addClass("show");
    }), 600);
    setTimeout((function() {
      return $("footer").addClass("show");
    }), 2000);
    return $("#subForm").submit(function(e) {
      e.preventDefault();
      return $.getJSON(this.action + "?callback=?", $(this).serialize(), function(data) {
        if (data.Status === 400) {
          $("form").addClass("animated shake");
          return setTimeout((function() {
            return $("form").removeClass("animated shake");
          }), 1200);
        } else {
          $("button").text("Thanks!");
          return analytics.track('Subscribed');
        }
      });
    });
  });

}).call(this);
