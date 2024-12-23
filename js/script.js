const endDate = '1 January 2025 12:01 AM';
document.getElementById('end-date').innerText = endDate;

function countDown(){
    let todayDate =new Date();
    let endDateObj =new Date(endDate)
    let diff = endDateObj-todayDate;
    let inputs = document.querySelectorAll('input');

    inputs[0].value = Math.floor(diff/(1000*60*60*24))
    inputs[1].value = Math.floor(diff%(1000*60*60*24)/(1000*60*60))
    inputs[2].value = Math.floor(diff%(1000*60*60)/(1000*60))
    inputs[3].value = Math.floor(diff%(1000*60)/(1000))
}

setInterval(countDown,1000)