const express = require('express')
const app = express()

const cors = require("cors")
app.use(cors())

const Port = 3000

function Bmi(BMI) {
    if (BMI < 18.5) return "Underweight";
    else if (BMI < 22.9) return "Normal";
    else if (BMI < 24.9) return "Overweight";
    else if (BMI < 30) return "Obese";
    return "Extremely Obese"
}
function Cal(Weight, Height) {
    if (!Weight || !Height
        || Weight <= 0 || Height <= 0
        || isNaN(Number(Weight)) || isNaN(Number(Height))
    ) return {error : "Invalid Inputs"};

    const BmiResult = (Weight / ((Height / 100) ** 2)).toFixed(2);
    const BmiLevel = Bmi(BmiResult);

    return {
        bmi : BmiResult,
        category : BmiLevel
    }
}

app.get('/bmi', (req, res) => {
    let weight = req.query.weight;
    let height = req.query.height;
    let result = Cal(weight, height);

    if (result.error) {
        return res.status(404).json({
            "error": result.error
        })
    }

    res.json({
        "BMI": result.bmi,
        "Category": result.category
    })
})

app.listen(3000, () => {
    console.log("Server starts successfully")
})