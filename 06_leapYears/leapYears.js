const leapYears = function(year) {
    let bool = false;

    if (year % 4 == 0) {
        bool = true;

        if (year % 100 == 0 && year % 400 != 0) {
            bool = false;
        }

        if (year % 100 == 0 && year % 400 == 0) {
            bool = true;
        }

    }
    return bool;
};

// Do not edit below this line
module.exports = leapYears;
