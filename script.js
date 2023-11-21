let display = document.getElementById('display')
let jokeSeries = [];
// Asynchronous Programming

// JS Promises
let getJokes = () => {
    // const URL = 'http://universities.hipolabs.com/search?countru=United+States'
    const URL = 'http://sv443.net/jokeapi/v2'
    let myJokes = fetch(URL);
    myJokes.then((data) => data.json())
    .then((data) => {
        jokeSeries = data;
        console.log(data[0])
    })
    .catch(err => console.log(err));
}
getJokes()

setTimeout(() => {
    console.log(jokeSeries);
},10000)

display.innerHTML = jokeSeries

//Asyncawait