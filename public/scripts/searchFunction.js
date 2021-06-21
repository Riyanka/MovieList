//function binding the search filter

function searchFunction() {
    document.getElementById("moviedescription").innerHTML = "No movie selected";
    document.getElementById("moviedirector").innerHTML = "";
    let searchInput, filter, list, a, textValue;
    searchInput = document.getElementById("input");
    filter = searchInput.value.toUpperCase();
    list = document.getElementsByClassName("movieRow");
    for (let i = 0; i < list.length; i++) {
        a = list[i];
        textValue = a.textContent || a.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }
}