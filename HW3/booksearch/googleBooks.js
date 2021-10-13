

document.getElementById('btn').addEventListener('click', function(){
    var keySearch = document.getElementById('searchvalue').value;
    $.getJSON("https://www.googleapis.com/books/v1/volumes?q=" + keySearch +  "s&key=AIzaSyDm_D5o2TVeeDa6ipghavrUi2KJvNlgUm8", function(data){
        console.log(data);

        document.querySelector('.container').remove();

        let divContainer = document.createElement('div');
        document.body.appendChild(divContainer);
        divContainer.classList.add('container');

        for(let i = 0; i < 10 ; i ++){
            let newDiv = document.createElement('div');
            divContainer.appendChild(newDiv);
            newDiv.classList.add('box');

            let newImage = document.createElement('img');
            newDiv.appendChild(newImage);
            let imgCondition = 'imageLinks' in data.items[i].volumeInfo;
            console.log(imgCondition);
            if(imgCondition){
                newImage.src = data.items[i].volumeInfo.imageLinks.thumbnail;
            } else {
                newImage.src = "bookcover.jpg";
            }
            newImage.classList.add('img');

            let newTitle = document.createElement('h3');
            newDiv.appendChild(newTitle);
            newTitle.innerHTML = data.items[i].volumeInfo.title;

            let newAuthor = document.createElement('p');
            newDiv.appendChild(newAuthor);
            newAuthor.innerHTML = data.items[i].volumeInfo.authors[0];
            newAuthor.classList.add('auth');

            let newDetail = document.createElement('a');
            newDiv.appendChild(newDetail);
            newDetail.classList.add('linkbook');
            newDetail.innerHTML = "Detail";
            newDetail.href = data.items[i].volumeInfo.infoLink;
        }
        
    
    })
});


