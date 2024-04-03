let calBtn = document.getElementById("calBtn");
let dateInput = document.getElementById("date-input");
let result = document.getElementById("result");

dateInput.max = new Date().toISOString().split("T")[0];

calBtn.addEventListener('click', () => {
    let birthday = new Date(dateInput.value);
    
    let inputDate = birthday.getDate();
    let inputMonth = birthday.getMonth() + 1;
    let inputYear = birthday.getFullYear();

    let today = new Date();
    
    let todayDate = today.getDate();
    let todayMonth = today.getMonth() + 1;
    let todayYear = today.getFullYear(); 

    let resultDate, resultMonth, resultYear;

    resultYear = todayYear - inputYear;

    if(todayMonth >= inputMonth){
        resultMonth = todayMonth - inputMonth;
    } else {
        resultYear--;
        resultMonth = 12 + todayMonth - inputMonth;
    }

    if(todayDate >= inputDate){
        resultDate = todayDate - inputDate;
    } else {
        resultMonth--; 
        let daysInMonth = getDaysInMonth(inputYear, inputMonth - 1); 
        resultDate = daysInMonth + todayDate - inputDate;
    }
    
    if(resultMonth < 0){
        resultMonth = 11;
        resultYear--;
    }

    result.innerHTML = "You are " + "<span>" + resultYear + "</span>" + " Years , " + "<span>" + resultMonth + "</span>" + " Months and  " + "<span>" + resultDate + "</span>" + " days old.";
});

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
