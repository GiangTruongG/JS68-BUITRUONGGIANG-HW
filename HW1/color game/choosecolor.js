

let chooseColor = document.querySelector('.active');

chooseColor.addEventListener('click', paleColor)

function pickBox(){
    document.querySelector('.active').addEventListener('click', paleColor)
}


function paleColor(){
    let boxes = document.getElementsByClassName('box');
    let randomColor = "";
    randomColor = "rgba(" + Math.ceil(Math.random() * 150) + ',' + Math.ceil(Math.random() * 150) + ',' + Math.ceil(Math.random() * 150) + ',' + Math.random() + ')';
    
    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.opacity = '1'
    }
    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = randomColor
    }
    
    let randomBox = boxes[Math.floor(Math.random() * 9)];
    randomBox.style.opacity = '0.5'

    for(let k = 0; k < boxes.length; k++){
        boxes[k].classList.remove('active');
    }
    
    for(let o = 0; o < boxes.length; o++){
        boxes[o].removeEventListener('click', paleColor);
    }

    randomBox.classList.add('active');

    
    pickBox()
    
    timeWidth = 100;

    resetTimer()
}






    let timeCounter = document.querySelector('.time');
    var timeWidth = 100;

    let id = setInterval(timeToChoose, 50);

    function timeToChoose(){
        if(timeWidth == 1){
            clearInterval(id);
            alert("Time's up ... you're loser");
        } else {
            timeWidth--;
            timeCounter.style.width = timeWidth + '%'
        }
    }



