const jokeElement = document.getElementById('joke')
const btn = document.getElementById('btn')


btn.addEventListener('click',getJoke)


async function getJoke(){
    const request = await fetch('https://icanhazdadjoke.com',{
        headers:{
            Accept: 'application/json',
        }
    })
    const data = await request.json()
    jokeElement.innerHTML = data.joke
}