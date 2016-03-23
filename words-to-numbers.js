wtn = {};

wtn.singles = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

wtn.convert = function(input)
{
    return this.singles.indexOf(input.toLowerCase()) + 1;
}
