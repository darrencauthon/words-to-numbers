wtn = {};

wtn.singles = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
wtn.singles = {
                  'one': 1,
                  'two': 2,
                  'three': 3,
                  'four': 4,
                  'five': 5,
                  'six': 6,
                  'seven': 7,
                  'eight': 8,
                  'nine': 9,
                  'ten': 10,
                  'eleven': 11,
                  'twelve': 12,
                  'thirteen': 13,
                  'fourteen': 14,
                  'fifteen': 15,
                  'sixteen': 16,
                  'seventeen': 17,
                  'eighteen': 18,
                  'nineteen': 19
              };

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
    var words = input.match(/([a-z ]+ thousand|[a-z ]+ hundred|[a-z]+)/gi);
    var total = 0;
    for (var i=0; i < words.length; i++){
        var word = words[i].toLowerCase();
        if (word.indexOf('thousand') > -1)
        {
            var counts = word.split(' ');
            counts.pop();
            total += wtn.convert(counts.join(' ')) * 1000;
        }
        else if (word.indexOf('hundred') > -1)
        {
            var counts = word.split(' ');
            counts.pop();
            total += wtn.convert(counts.join(' ')) * 100;
        }
        if (this.tens[word] != undefined)
            total += this.tens[word];
        if (this.singles[word] != undefined)
            total += this.singles[word];
    }
    return total;
}
