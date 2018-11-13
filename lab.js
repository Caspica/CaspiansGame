let el = document.querySelector("main div");

console.log(el);
el.addEventListener("click", function (event) {
    setTimeout(function () {
        console.log(event);
        let newDiv = document.createElement("div");
        el.appendChild(newDiv);
        newDiv.innerHTML = "<strong>Very important!!!!</strong>";
        0
    }, 1000);
});
alert("before");
window.alert = function (message) {
    console.log("Alert!" + message);
};

alert("after");
