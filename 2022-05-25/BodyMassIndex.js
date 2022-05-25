//calc bmi with weight and height as inputs and equation bmi = w/h^2
function bmi(weight, height) {
    //calc BMI
    let body = weight / Math.pow(height,2)
    //create conditional and return
    return body<=18.5? 'Underweight': body<=25.0? 'Normal': body<=30? 'Overweight': 'Obese';
  }
  console.log(bmi(80,1.8))