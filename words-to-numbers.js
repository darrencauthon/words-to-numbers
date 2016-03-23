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
        return this.singles.indexOf(split[1]) + 21;
    }
    return single + 1;
}
