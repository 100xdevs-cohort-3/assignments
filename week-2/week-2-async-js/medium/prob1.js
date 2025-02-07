/* 
The regular expression `/\s+/g` is used to match sequences of one or more whitespace characters in a string. Let’s break down its components:

- `/.../`: Delimiters for the regular expression in many programming languages like JavaScript.
- `\s`: A shorthand character class that matches any whitespace character (spaces, tabs, line breaks, etc.).
- `+`: A quantifier that means "one or more" of the preceding element. So, `\s+` matches one or more whitespace characters.
- `g`: A flag that stands for "global," meaning the pattern will be applied to the entire string, not just the first occurrence.

In summary, `/\s+/g` finds all sequences of whitespace characters in a string. For example, if you have the string `"Hello    world!  How are   you?"`, using this regex would match `"    "` (multiple spaces) and `"  "` (two spaces), and you could use it to replace all such sequences with a single space or another character of your choice.
*/


const fs = require("fs")

fs.readFile('./prob1.txt', 'utf-8', (err, data) => {
    console.log("data before: ", data);
    const words = data.replace(/\s+/g, ' ').trim();
    console.log(words);

    fs.writeFile('./prob1.txt', words, (err) => {
        console.log("Done!");
    })
})
