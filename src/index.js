module.exports = function toReadable(number) {
    let ones = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    let twoDigitTeen = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    let twoDigitTens = {
        10: "ten",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    // task solution
    if (number > 0 && 10 > number) {
        return ones[number];
    } else if (number >= 10 && number < 20) {
        return twoDigitTeen[number];
    } else if (100 > number && number >= 20) {
        let str = number.toString().split("");
        let twoDigitTenS = str[0] * 10;
        if (str[1] === "0") {
            return twoDigitTens[twoDigitTenS];
        }
        return (
            twoDigitTens[twoDigitTenS] + " " + ones[str[1]] ||
            twoDigitTens[twoDigitTenS]
        );
    } else if (number === 0) {
        return "zero";
    } else if (number === 10) {
        return "twoDigitTen";
    }

    if (number >= 100 && 999 >= number) {
        let num = number % 100;
        let string = number.toString().split("");
        let twoDigitTeenS = (string[1] + string[2]) * 1;

        if (string[1] === "0" && string[2] === "0") {
            return ones[string[0]] + " " + "hundred";
        } else if ((num = ones[num])) {
            return ones[string[0]] + " " + "hundred" + " " + ones[number % 100];
        } else if (twoDigitTeenS > 10 && 19 >= twoDigitTeenS) {
            return (
                ones[string[0]] +
                " " +
                "hundred" +
                " " +
                twoDigitTeen[twoDigitTeenS]
            );
        } else if (string[2] === "0") {
            return (
                ones[string[0]] +
                " " +
                "hundred" +
                " " +
                twoDigitTens[number % 100]
            );
        } else {
            return (
                ones[string[0]] +
                " " +
                "hundred" +
                " " +
                twoDigitTens[(number % 100) - Math.round(number % 10)] +
                " " +
                ones[string[2]]
            );
        }
    }
};
