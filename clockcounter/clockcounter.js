
function myFunction(){

    let countTheTime = setInterval(countTime(), 100);
    
    function countTime(){

        
        let myDate = document.getElementById('mydate').value;

        let todayDate = new Date();

        let milisecondOfDay = 86400000;

        let timeOfMyDate = Date.parse(myDate);

        let timeOfTodayDate = todayDate.getTime();

        let durationOfmyDate = (Date.parse(myDate) / milisecondOfDay);
    
        let durationOfTodayDate = (todayDate.getTime() / milisecondOfDay);

        if(timeOfMyDate < timeOfTodayDate){
            let date = Math.floor((durationOfmyDate - durationOfTodayDate) * -1);
            let minutes = todayDate.getMinutes();
            let hours = todayDate.getHours();
            let seconds = todayDate.getSeconds();
            console.log(date);
            document.getElementById('day').innerHTML = '-' + date;
            document.getElementById('hour').innerHTML = '-' + hours;
            document.getElementById('minute').innerHTML = '-' + minutes;
            document.getElementById('second').innerHTML = '-' + seconds;
        } else {
            let date = Math.floor((durationOfmyDate - durationOfTodayDate));
            let minutes = todayDate.getMinutes();
            let hours = todayDate.getHours();
            let seconds = todayDate.getSeconds();
            console.log(date);
            document.getElementById('day').innerHTML = date;
            document.getElementById('hour').innerHTML = 23 - hours;
            document.getElementById('minute').innerHTML = 59 - minutes;
            document.getElementById('second').innerHTML = 59 - seconds;
        }
    }
    
    
}


