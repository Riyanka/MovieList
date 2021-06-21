  //loading screen with the initial API response as well as the data after sort

  function loadScreen(data, action) {
    let mainContainer = document.getElementById("movieList");
    let parameters = new Array("episode_id", "title", "release_date");
    let columns = new Array("movieColumn col-md-3", "movieColumn col-md-6", "movieColumn col-md-3 text-right");
    let prefix = new Array("Episode: ", " ", " ");
    if (action === "initialLoad") {
      for (let i = 0; i < data.length; i++) {
        let divchild1 = document.createElement("div");
        divchild1.className = "movieRow row";
        divchild1.id = "movieRow" + i;
        for (let j = 0; j < columns.length; j++) {
          let divchild2 = document.createElement("div");
          divchild2.className = columns[j];
          divchild2.id = "cell" + i + j;
          divchild2.innerHTML = prefix[j] + data[i].fields[parameters[j]];
          divchild1.appendChild(divchild2);
        }
        mainContainer.appendChild(divchild1);
      }
    }
    if (action === "sort") {
      let divchild1 = document.getElementsByClassName("movieRow");
      for (let i = 0; i < data.length; i++) {
        let divchild2 = divchild1[i].getElementsByClassName("movieColumn");
        for (let j = 0; j < columns.length; j++) {
          divchild2[j].innerHTML = prefix[j] + data[i].fields[parameters[j]];
        }
      }
    }
  };

  //Funtion to display movie description
  function moviedescription(data, idNumber) {
    document.getElementById("moviedescription").innerHTML =
      data[idNumber].fields.opening_crawl;
    document.getElementById("moviedirector").innerHTML = "Directed by: " + data[idNumber].fields.director + ".";
  }


  //Funtion to sort movie list w.r.t.Episode name and year
  function sortMovieList(data, id) {
    if (id === "episode") {
      data.sort((a, b) => a.fields.episode_id > b.fields.episode_id ? 1 :
        b.fields.episode_id > a.fields.episode_id ? -1 : 0);
    } else if (id === "year") {
      console.log(id);
      data.sort((a, b) => a.fields.release_date > b.fields.release_date ? 1 :
        b.fields.release_date > a.fields.release_date ? -1 : 0);
    }
    loadScreen(data, "sort");
  }