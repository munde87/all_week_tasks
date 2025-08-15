// Task 1
document.getElementById("btnChangeText").addEventListener("click", function() {
    document.getElementById("para1").innerText = "Button Clicked!";
});



// Task 2
window.addEventListener("load", function() {
    alert("Welcome to Week 5 !");
});



// Task 3
document.getElementById("btnBgColor").addEventListener("click", function() {
    document.body.style.backgroundColor = "#f0c040";
});


// Task 4
document.getElementById("textInput").addEventListener("input", function() {
    let count = this.value.length;
    document.getElementById("charCount").innerText = "Characters typed: " + count;
});


// Task 5
document.getElementById("btnToggle").addEventListener("click", function() {
    let para = document.getElementById("togglePara");
    para.style.display = para.style.display === "none" ? "block" : "none";
});


// Task 6
setTimeout(function() {
    console.log("Hello after 3 seconds");
}, 3000);
