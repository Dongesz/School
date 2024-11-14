
function getWeekday() {
    const today = new Date();
    const weekdays = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const dayOfWeek = today.getDay();  

 /* 0: Vasárnap
    1: Hétfő
    2: Kedd
    3: Szerda
    4: Csütörtök
    5: Péntek
    6: Szombat */

    const weekdayElement = document.getElementById('weekday');

    if (dayOfWeek === 0 || dayOfWeek === 6) {
        weekdayElement.textContent = `Today is the weekend, a day off!`;
    } else {
        weekdayElement.textContent = `Today is ${weekdays[dayOfWeek - 1]}.`;
    }
}

function getRemainingWeeks() {
    const today = new Date();
    const endOfYear = new Date(today.getFullYear(), 11, 31);  

    const daysLeft = (endOfYear - today) / (1000 * 60 * 60 * 24);  // --> 1 nap = 1000 * 60 * 60 * 24 milliszekundum
    const weeksLeft = Math.floor(daysLeft / 7);  

    const weeksElement = document.getElementById('remaining-weeks');
    weeksElement.textContent = `${weeksLeft} weeks left until the end of the year.`;
}
function calculateWeekdaysInMonth() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    
    let weekdaysCount = 0;

    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    for (let date = firstDayOfMonth; date <= lastDayOfMonth; date.setDate(date.getDate() + 1)) {
        const dayOfWeek = date.getDay();
        
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            weekdaysCount++;
        }
    }

    const weekdaysInMonthElement = document.getElementById('weekdays-in-month');
    weekdaysInMonthElement.textContent = `${weekdaysCount}  weekdays in this month.`;
}

window.onload = function() {
    getWeekday();     
    getRemainingWeeks(); 
    calculateWeekdaysInMonth();
};
