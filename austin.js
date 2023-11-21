let displayType = document.getElementById("displayType")
let jokeline = document.getElementById("displayJoke")
let JQuestion = document.getElementById("displayQuestion")

let req = fetch ('https://official-joke-api.appspot.com/random_joke')
req.then(cheta => cheta.json())
.then(res => {
    console.log(res)

    displayType.innerHTML = res.type
    JQuestion.innerHTML = res.setup
    jokeline.innerHTML = res.punchline
})
.catch(err =>{throw "I can't fit"})
.catch(err => console.log(err))

// Using async function to write promises
let cheta = async() =>{
    try{
        let seen = await fetch('https://official-joke-api.appspot.com/random_joke')
        let reqStatus = seen.status;
        if(reqStatus === 100){throw 'failure'}

        let res = await seen.json()
        console.log(data)
        jokeline.innerHTML = res.punchline
    }
    catch(err){
        console.log(err)
    }
}
cheta()