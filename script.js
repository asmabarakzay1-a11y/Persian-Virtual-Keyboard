
const input = document.getElementById("textInput");

const keys = document.querySelectorAll(".key");

keys.forEach(function(key) {

    key.addEventListener("click", function() {

        const action = key.dataset.action;
        const value = key.innerText;

        if (action === "clear") {

            input.value = "";

        }

        else if (action === "backspace") {

            input.value = input.value.slice(0, -1);

        }

        else if (action === "space") {

            input.value += " ";

        }

        else {

            input.value += value;

        }

        input.focus();

    });

});
