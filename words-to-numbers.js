wtn = {};

wtn.singles = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

wtn.tens = {
               'twenty': 20,
               'thirty': 30,
               'forty': 40,
               'fifty': 50,
               'sixty': 60,
               'seventy': 70,
               'eighty': 80,
               'ninety': 90
           };

wtn.convert = function(input)
{
    var single = this.singles.indexOf(input.toLowerCase());
    if (single == -1)
    {
        var split = input.split(' ');
        if (wtn.tens[split[0]] != undefined)
            return this.singles.indexOf(split[1]) + 1 + wtn.tens[split[0]];
    }
    return single + 1;
}
