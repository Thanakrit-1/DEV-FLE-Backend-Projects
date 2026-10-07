function bmi() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let result_tag = document.getElementById("result");
    let type_tag = document.getElementById("type");

    fetch(`http://localhost:3000/bmi?weight=${weight}&height=${height}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
           
            if (data.error) {
                result_tag.innerText = "BMI is: Error - " + data.error;
                type_tag.innerText = "type is: Error";
            } else {
                result_tag.innerText = "BMI is: " + data.BMI;
                type_tag.innerText = "type is: " + data.Category;
            }
        })
}