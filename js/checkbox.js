const cartoonImage = document.getElementById('cartoonimg')
const mode = document.getElementById('lightMode')
const emojiInput = document.getElementById("emojiInput");
const emoji = document.getElementById("emoji");
emojiInput.addEventListener('click', () => {
    console.log(emojiInput.checked);
    if(emojiInput.checked == true){
        emoji.innerHTML='&#127773;'
        mode.classList.add('mainLight')
        cartoonImage.src = "images/im1dark.png"
    }
    else{
        emoji.innerHTML='&#127770;'
        mode.classList.remove('mainLight')
        cartoonImage.src = "images/im1.png"
    }
})