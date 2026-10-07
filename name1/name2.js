function AboutMe() {
    fetch("http://localhost:3000/name")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            document.getElementById("greeting-text").innerText = "ชื่อ: " + data.name + " ชื่อเล่น: " + data.nickname + " อายุ: " + data.age;
            document.getElementById("result").innerText = "FB: " + data.facebook + " IG: " + data.instagram;
        })
}
function PublicAPI() {
    fetch("https://dummyjson.com/quotes/random")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            document.getElementById("greeting-text").innerText = "ข้อความจาก Public API";
            document.getElementById("result").innerText = data.quote + " โดย " + data.author;
            })
}