let value = 0;

const checkBoxesList = document.querySelectorAll(".custom-checkbox");
const inputValues = document.querySelectorAll(".goal-input");
const errorClass = document.querySelector(".error-label");
const progressBar = document.querySelector(".progress-value");
const progressBarValue = document.querySelector('.progress-bar-value');

progressBarValue.innerText = value;
progressBar.style.width = value === 3
    ? "100%" :
    value === 2 ? "66.66%" :
        value === 1 ? "33.33%" :
            "0%";

console.log(checkBoxesList);

checkBoxesList.forEach((checkBox) => {
    checkBox.addEventListener('click', (e) => {

        console.log(e.target.value);

        const isInputFieldsFilled = [...inputValues].every((item) => {
            return item.value;
        })


        if (isInputFieldsFilled) {
            checkBox.parentElement.classList.toggle('completed');
            errorClass.style.display = 'none'

            const isInputFieldsFilled = [...inputValues].reduce((acc, curr) => {
                // debugger;
                return acc + (curr.value ? 1 : 0);
            }, 0)
            // debugger;
            progressBarValue.innerText = isInputFieldsFilled;
            // progressBarValue.innerText = value;
            progressBar.style.width = isInputFieldsFilled === 3
                ? "100%" :
                isInputFieldsFilled === 2 ? "66.66%" :
                    isInputFieldsFilled === 1 ? "33.33%" :
                        "0%";

            // debugger;
        } else {
            errorClass.style.display = 'block'
        }

    });
})

inputValues.forEach((item) => {
    item.addEventListener(('focus', (e) => {
        errorClass.style.display = 'none'
    }))
})