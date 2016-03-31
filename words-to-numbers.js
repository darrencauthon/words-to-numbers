wtn = {};

wtn.singles = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
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

wtn.convert = function(input)
{
    var handleComplicatedNumber = function(phrase)
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

    var phrases = input.match(/([a-z ]+ million|[a-z ]+ thousand|[a-z ]+ hundred|[a-z]+)/gi);
    var total = 0;

    for (var i=0; i < phrases.length; i++){
        var phrase = phrases[i].toLowerCase();

        total += handleComplicatedNumber(phrase);
        if (this.tens[phrase] != undefined)
            total += this.tens[phrase];
        if (this.singles[phrase] != undefined)
            total += this.singles[phrase];
    }
    return total;
}
