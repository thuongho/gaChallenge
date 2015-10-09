(function(){

  // variables
  var searchButton = document.getElementById('searchButton'),
      movieResults = document.getElementById('movieResults'),
      title,
      request,
      requestLink,
      returnMovie;


  searchButton.addEventListener("click", function(e) {
    // grab title from input
    title = document.getElementById('movieSearch').value;

    if (title) {

      // support old browsers
      if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
      } else {
        request = new ActiveXObject('Microsoft.XMLHTTP');
      }

      requestLink = 'http://www.omdbapi.com/?t=' + title + '&r=json';
      // replace title with space with %20 in links
      returnMovie = requestLink.replace(' ', '%20');
      console.log(returnMovie);

      // Make request to [OMDBapi](http://www.omdbapi.com/)
      request.open('GET', returnMovie, true);
      console.log(request);
      request.onreadystatechange = function () {
        if ((request.readyState === 4) && (request.status === 200)) {
          movieResults.innerHTML = request.responseText;
          console.log(request);

          var info = JSON.parse(request.responseText);
          console.log(info);
        }
      }

    }
    
  });

}());