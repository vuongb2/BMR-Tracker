// create variables to hold query info
const calories = document.querySelector
(".bmr-calculator .result .calories");
const calculateBtn = document.querySelector
(".bmr-calculator .result .calculate-btn");
const age = document.querySelector
(".bmr-calculator form #age");
const height = document.querySelector
(".bmr-calculator form #height");
const weight = document.querySelector
(".bmr-calculator form #weight");

const errMessage = document.querySelector
(".bmr-calculator .result .error-message");

// function to calculate BMR
// M-BMR = (10 x weight) + (6.25 x height) - (5 x age) + 5
// F-BMR = (10 x weight) + (6.25 x height) - (5 x age) - 161
const calculateBMR = (weight, height, age, gender) => {
    if(gender == "male") {
        return 10*weight + 6.25*height - 5*age + 5;
    }
    
    return 10*weight + 6.25*height - 5*age - 161;
};

// calls function when event occurs
calculateBtn.addEventListener("click", () => {

    // error handling
    if (age.classList.contains("invalid") ||
    height.classList.contains("invalid") ||
    weight.classList.contains("invalid")) {
        errMessage.classList.add("active");
        return;
    }

    errMessage.classList.remove("active");

    let genderValue = document.querySelector
    (".bmr-calculator form input[name='gender']:checked")
        .value;

    let BMR = calculateBMR(weight.value, height.value,
         age.value, genderValue)
    
    calories.innerHTML = BMR;
});

// input validation for age, height, and weight

age.addEventListener("input", (field) => {
    // console.log(field.target.value);
    let ageValue = field.target.value;
    if (!ageValue || isNaN(ageValue) || ageValue > 100) {
        age.classList.add("invalid");
    } else {
        age.classList.remove("invalid")
    }
});

height.addEventListener("input", (field) => {
    // console.log(field.target.value);
    let heightValue = field.target.value;
    if (!heightValue || isNaN(heightValue) || heightValue < 10) {
        height.classList.add("invalid");
    } else {
        height.classList.remove("invalid")
    }
});

weight.addEventListener("input", (field) => {
    // console.log(field.target.value);
    let weightValue = field.target.value;
    if (!weightValue || isNaN(weightValue) || weightValue < 0) {
        weight.classList.add("invalid");
    } else {
        weight.classList.remove("invalid")
    }
});