wtn = {};

wtn.singles = {
                  'one':        1,
                  'two':        2,
                  'three':      3,
                  'four':       4,
                  'five':       5,
                  'six':        6,
                  'seven':      7,
                  'eight':      8,
                  'nine':       9,
                  'ten':       10,
                  'eleven':    11,
                  'twelve':    12,
                  'thirteen':  13,
                  'fourteen':  14,
                  'fifteen':   15,
                  'sixteen':   16,
                  'seventeen': 17,
                  'eighteen':  18,
                  'nineteen':  19
              };

wtn.tens = {
               'twenty':  20,
               'thirty':  30,
               'forty':   40,
               'fifty':   50,
               'sixty':   60,
               'seventy': 70,
               'eighty':  80,
               'ninety':  90
           };

wtn.complicated_numbers = {
                             'million':  1000000,
                             'thousand': 1000,
                             'hundred':  100,
                          };

wtn.regex = function()
{
    var regex = [];
    for(var key in wtn.complicated_numbers)
        regex.push("[a-z ]+ " + key);
    regex.push("[a-z]+");
    regex = "(" + regex.join('|') + ")";
    regex = new RegExp(regex, "gi");
    wtn.regex = function() { return regex; };
    return regex;
}

wtn.convert = function(input)
{
    var phrases = input.match(wtn.regex());

    var total = 0;

    for (var i=0; i < phrases.length; i++){
        var phrase = phrases[i].toLowerCase();

        var complicatedNumber = wtn.handleComplicatedNumber(phrase);
        if (complicatedNumber > 0)                  total += complicatedNumber;
        else if (this.tens[phrase] != undefined)    total += this.tens[phrase];
        else if (this.singles[phrase] != undefined) total += this.singles[phrase];
        else if (phrase.toLowerCase() != 'and')     return undefined;
    }

    return total;
}


wtn.handleComplicatedNumber = function(phrase)
{
    for(var key in wtn.complicated_numbers){
        if (phrase.indexOf(key) > -1)
        {
            var words = phrase.split(' ');
            words.pop();
            return wtn.convert(words.join(' ')) * wtn.complicated_numbers[key];
        }
    }
    return 0;
}

