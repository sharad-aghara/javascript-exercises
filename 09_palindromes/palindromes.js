const palindromes = function (sentance) {
    const alphanumericChars = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const filtredString = sentance
        .toLowerCase()
        .split('')
        .filter((charactor) => alphanumericChars.includes(charactor))
        .join('');

    const filteredReversed = filtredString.split('').reverse().join('');

    return filtredString === filteredReversed;
};

// Do not edit below this line
module.exports = palindromes;
