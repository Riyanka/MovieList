//Called initially to get the API response in the form of data object

async function getData() {
  let response = await fetch("https://star-wars-api.herokuapp.com/films");
  let data = await response.json();
  return data;
};