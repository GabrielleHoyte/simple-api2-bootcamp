document.querySelector('button').addEventListener('click', getGif)

function getGif(){
  let keyword = document.querySelector('input').value
  let url = `https://g.tenor.com/v1/search?q=${keyword}&key=LIVDSRZULELA&limit=8`

  fetch(url.toLowerCase())
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('h2').innerText = keyword
    document.querySelector('.one').innerText = data.results[0].content_description
    document.querySelector('.gifOne').src = data.results[0].media[0].gif.url
    document.querySelector('.two').innerText = data.results[1].content_description
    document.querySelector('.gifTwo').src = data.results[1].media[0].gif.url
    document.querySelector('.three').innerText = data.results[2].content_description
    document.querySelector('.gifThree').src = data.results[2].media[0].gif.url
    document.querySelector('.four').innerText = data.results[3].content_description
    document.querySelector('.gifFour').src = data.results[3].media[0].gif.url
    document.querySelector('.five').innerText = data.results[4].content_description
    document.querySelector('.gifFive').src = data.results[4].media[0].gif.url
    document.querySelector('.six').innerText = data.results[5].content_description
    document.querySelector('.gifSix').src = data.results[5].media[0].gif.url
    document.querySelector('.seven').innerText = data.results[6].content_description
    document.querySelector('.gifSeven').src = data.results[6].media[0].gif.url
    document.querySelector('.eight').innerText = data.results[7].content_description
    document.querySelector('.gifEight').src = data.results[7].media[0].gif.url
  })
  .catch(err => {
    console.log(`err ${err}`)
  })
}