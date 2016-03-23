wtn = {};

wtn.singles = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

wtn.convert = function(input)
{
    var single = this.singles.indexOf(input.toLowerCase());
    if (single == -1)
    {
        var split = input.split(' ');
        if (split[0] == 'thirty')
            return this.singles.indexOf(split[1]) + 31;
        if (split[0] == 'forty')
            return this.singles.indexOf(split[1]) + 41;
        if (split[0] == 'fifty')
            return this.singles.indexOf(split[1]) + 51;
        if (split[0] == 'sixty')
            return this.singles.indexOf(split[1]) + 61;
        if (split[0] == 'seventy')
            return this.singles.indexOf(split[1]) + 71;
        if (split[0] == 'eighty')
            return this.singles.indexOf(split[1]) + 81;
        if (split[0] == 'ninety')
            return this.singles.indexOf(split[1]) + 91;
        return this.singles.indexOf(split[1]) + 21;
    }
    return single + 1;
}
