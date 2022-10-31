//User value
//computer value
//compare
//display
//stop

//rock=0, paper=1, scissors=2

let userValues=document.querySelectorAll(".userButtons")
let finalScore=0
function computerValue(){
    const rpschoices=['Rock', 'Paper', 'Scissors']
    let computerVal=Math.floor(Math.random()*3)
    return rpschoices[computerVal]
}


function compare(userVal, computerVal){
    let roundScore=0
    //let computerVal=computerValue()
    if(userVal==computerVal)
        roundScore=0
    else if (computerVal=='Rock') {
        if (userVal=='Paper') {
            roundScore=1
        } else {
            roundScore=-1                 
        }
    }
    else if(computerVal=='Paper'){
        if (userVal=='Rock') {
            roundScore=-1
        } else {
            roundScore=1
        }
    }
    else if(computerVal=='Scissors'){
        if (userVal=='Rock') {
            roundScore=1;
        } else {
            roundScore=-1;
        }
    }
    return roundScore
}

function calcUserValue() {
    userValues.forEach(val=>{
        val.onclick = ()=>returnUserValue(val.value)
    })
}


function returnUserValue(userValue){
    let computerVal=computerValue()
    //document.getElementById("choices").innerText=computerVal
    let score = compare(userValue, computerVal)
    //document.getElementById("choices").innerText=userValue+computerVal+score

    display(score, userValue, computerVal)
}

calcUserValue()


function display(score, userValue, computerValue){
    document.getElementById("choices").innerText=`🤵🏼: ${userValue} VS 💻: ${computerValue}`
    if(score==0){
        document.getElementById("result").innerText="It's a draw😐"
        document.getElementById("userScore").innerText=`Score: ${finalScore}`
    }
    else if(score==1){
        document.getElementById("result").innerText="You win!!😁"
        finalScore+=1
        document.getElementById("userScore").innerText=`Score: ${finalScore}`
    }
    else{
        document.getElementById("result").innerText="You lose!!🙁"
        finalScore-=1
        document.getElementById("userScore").innerText=`Score: ${finalScore}`
    }
}


function clearButton(){
    document.getElementById("choices").innerText=''
    document.getElementById("result").innerText=''
    document.getElementById("userScore").innerText=''
}