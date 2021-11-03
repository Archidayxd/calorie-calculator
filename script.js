let countButton = document.getElementById("countButton")

countButton.addEventListener("click", function(e){
    e.preventDefault()
})

function countBtn(){

    console.log("clicked")
    let showAnswer = document.getElementById("answerBox")
    let genderMale = document.getElementById("radioMan").checked 
    let genderFemale = document.getElementById("radioWoman").checked 

    let howOldIs = document.getElementById("inputAge").value
    let howMuchHeight = document.getElementById("inputHeight").value 
    let howMuchWeight = document.getElementById("inputWeight").value 

    let whatIsChecked = document.getElementsByName("level")

    let minimumLevel = document.getElementById("minimumLevel")
    let lowLevel = document.getElementById("lowLevel")
    let mediumLevel = document.getElementById("mediumLevel")
    let highLevel = document.getElementById("highLevel")
    let veryHighLevel = document.getElementById("veryHighLevel")

    let firstResult = document.getElementById("firstResult")
    let secondResult = document.getElementById("secondResult")
    let thirdResult = document.getElementById("thirdResult")

    let genderCalories = 0
    let calories = 0

if(genderMale){
    console.log("М")
    genderCalories = 5
    console.log(genderCalories)
} else if(genderFemale){
    console.log("Ж")
    genderCalories = -161
    console.log(genderCalories)
}

console.log(howOldIs)
console.log(howMuchHeight)
console.log(howMuchWeight)

calories = ((howMuchWeight * 10) + (6.25 * howMuchHeight) - (5 * howOldIs) + genderCalories)
console.log(calories)


for (var i = 0; i < whatIsChecked.length; i++) {
  if (whatIsChecked[i].checked) {
    console.log(whatIsChecked[i].value);
    if(whatIsChecked[i] === minimumLevel){
        calories+=469
        console.log(calories)
    } else if(whatIsChecked[i] === lowLevel){
        calories+=806
        console.log(calories)
    } else if(whatIsChecked[i] === mediumLevel){
        calories+=890
        console.log(calories)
    } else if(whatIsChecked[i] === highLevel){
        calories+=974
        console.log(calories)
    } else if(whatIsChecked[i] === veryHighLevel){
        calories+=1817
        console.log(calories)
    }
    break;
  }
}

firstResult.textContent = Math.floor(calories) + " ккал"
secondResult.textContent = Math.floor(calories - 500) + " ккал"
thirdResult.textContent = Math.floor(calories + 500) + " ккал"


showAnswer.style.display = "block";
window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth' 
  });
  
  window.scrollBy({ 
    top: 100, 
    left: 0, 
    behavior: 'smooth' 
  });
  document.querySelector('.answer-box').scrollIntoView({ 
    behavior: 'smooth' 
  });
}
