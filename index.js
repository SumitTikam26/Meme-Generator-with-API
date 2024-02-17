const generateBtn = document.querySelector('.btn');
let Title = document.querySelector('.meme-title');
let Img = document.querySelector('.meme-image');
let Author = document.querySelector('.author');


function GntMeme(){
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res) => res.json())
    .then((data) => {
        const {title, author, url} = data
    Title.innerText = title;
    Author.innerText = author;
    Img.src = url;
    console.log(data);
    })
}
GntMeme();

generateBtn.addEventListener('click',()=>{
    GntMeme();
})