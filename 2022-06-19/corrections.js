//correct the code errors - originally they were using rainAmount rather than mm as an input/variable.  Also corrected math with addtion of newRain variable.

function rainAmount(mm){
    let newRain = 40-mm
    if (mm < 40) {
         return `You need to give your plant ${newRain}mm of water`
    }else{
         return "Your plant has had more than enough water for today!"
    }
}