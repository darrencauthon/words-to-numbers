wtn = {};

wtn.singles = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

wtn.convert = function(input)
{
    return this.singles.indexOf(input.toLowerCase()) + 1;
}
