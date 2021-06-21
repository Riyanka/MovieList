(function () {

  //function called to get initial API response
  getData().then(data => {

    //function called to load screen with the initial API response
    loadScreen(data, "initialLoad");

    //Binding division click to display movie description
    $(".movieRow").click(function () {
      let id = $(this).attr("id");
      let idNumber = id.substr(8);
      moviedescription(data, idNumber);
    });

    //Binding button click to sort movie list w.r.t. Episode name
    $("#episode").click(function () {
      let id = $(this).attr("id");
      sortMovieList(data, id);
    });

    //Binding button click to sort movie list w.r.t. year
    $("#year").click(function () {
      let id = $(this).attr("id");
      sortMovieList(data, id);
    });
  });

})();