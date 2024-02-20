var form = document.forms["forme"];
form.addEventListener('submit', BigtiddyGothGF);

const messageLossNeeded = document.getElementById('weightLoss');


function BigtiddyGothGF(event) {
    event.preventDefault();

    var weight = Number(document.getElementById("weightfield").value);
    var height = Number(document.getElementById("heightfield").value);
    var resultDiv = document.getElementById("result");
    var statDiv = document.getElementById("stat");

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.textContent = "Please enter height and weight values"
    }
    else {
        var BMI = (weight / (height ** 2))
        resultDiv.textContent = `Your BMI is ${BMI.toFixed(2)}`
        if (BMI < 18.5) {
            statDiv.textContent = `You're underweight`
        }
        if (BMI >= 18.5 && BMI < 25) {
            statDiv.textContent = `You're weight is in the norm`
        }
        if (BMI >= 25 && BMI < 30) {
            statDiv.textContent = `You're overweight`
        }
        if (BMI >= 30 && BMI < 35) {
            statDiv.textContent = `You're obese please consult and fitness trainer`
        }
        if (BMI >= 35) {
            statDiv.textContent = `You're  morbidly obese`
        }
    }
    bmiChecker(weight, height, BMI)
}

function bmiChecker(weight, height, originalBMI) {
    if (originalBMI >= 25) {
        calcLossNeeded(weight, height);
    }
    else if (originalBMI < 18.5) {
        calcGainNeeded(weight, height);
    }
    else {
        messageLossNeeded.innerText = ` `
    }
}

function calcLossNeeded(weight, height) {
    let LossNeeded = 0;
    for (weight; weight > 0; weight--) {
        BMI = (weight / (height ** 2))
        if (BMI < 25) {
            break;
        }
        LossNeeded++;
    }
    messageLossNeeded.innerText = `You should lose ${LossNeeded} KGs for healthier body`
}

function calcGainNeeded(weight, height) {
    console.log(weight, height);
    let GainNeeded = 0;
    for (weight; weight > 0; weight++) {
        BMI = (weight / (height ** 2))
        if (BMI >= 18.5) {
            break;
        }
        GainNeeded++;
    }
    messageLossNeeded.innerText = `You should gain ${GainNeeded} KGs healthy weight by exercises`
}