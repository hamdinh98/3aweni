


const FormatDate = (birthday) => {
    const date = new Date(birthday);
    console.log(date);

    // ✅ Reset a Date's time to midnight
    date.setHours(0, 0, 0, 0);

    // ✅ Format a date to YYYY-MM-DD (or any other format)
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate() + 1),
    ].join('-');




}

// console.log(FormatDate("1998-02-24"));

//  👇️️ 2025-05-09 (yyyy-mm-dd)
// console.log(formatDate(new Date(2025, 4, 9)));


module.exports = FormatDate