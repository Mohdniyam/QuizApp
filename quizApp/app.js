const questions = [
    {
        'que': 'Which of the following is a Markup language?',
         'a': 'HTML',
         'b':'CSS',
         'c':'JavaScript',
         'd':'PHP',
         'correct': 'a'
          
    },
    {
        'que': 'What year was JavaScript lanched?',
         'a': '1996',
         'b':'1995',
         'c':'1994',
         'd':'none of the obove',
         'correct': 'b'
          
    },
    {
        'que': 'What does CSS stands for?',
         'a': 'Hypertext',
         'b':'Cascading',
         'c':'Jeason',
         'd':'Helicopters',
         'correct': 'a'
          
    }
]
let index = 0;
let total = questions.length;
let right =0, wrong=0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options")

const loadQuestion = ()=> {
    if(index === total){
        return endQuiz();
    }
    resent();
    const data = questions[index]
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = ()=>{
    const ans = getAnswer()
    const data = questions[index]
    if(ans === data.correct){
        right = right +1;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = ()=> {
    let answer;
    optionInputs.forEach(
        (input) => {
        if(input.checked){
           answer = input.value;
           console.log(answer)
        }
        
        
    })
    return answer; 
}
const resent = ()=> {
    optionInputs.forEach(
        (input)=> {
            input.checked =false;
        }
    )
}
const endQuiz = ()=>{
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3> Thank You For Playing The Game. </h3>
    <h3> ${right}/${total} </h3>
    </div>
    `
}

loadQuestion();