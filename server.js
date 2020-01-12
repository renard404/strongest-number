const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to application." });
});

app.post("/getStrongestDigit/:number", function (req, res) {
    let number = req.params.number;
    response = getStrongestDigit(number);
    res.json({ "strongest": response[0], "steps": response[1] });
})

app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});

function getStrongestDigit(number) {
    steps = [];
    while (number.length > 1) {
        digits = "";
        l = number.length-1;
        for (i = 0; i <= l / 2; i++) {
            if (parseInt(number[i]) > parseInt(number[l - i])) {
                digits += number[i]
            }
            else if (parseInt(number[i]) < parseInt(number[l - i])) {
                digits += number[l - i]
            }
            else if(i == l-i){
                digits += number[i]
            }
        }
        if (digits.length > 1) {
            steps.push(parseInt(digits));
        }
        number = digits;
    }
    return [parseInt(number), steps];
}