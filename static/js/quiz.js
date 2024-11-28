const quizData = [
    {
        question: "What is desalination?",
        choices: [
            "A) Removing salt from ocean water to make it drinkable.",
            "B) Adding salt to freshwater.",
            "C) A process to generate renewable energy."
        ],
        correct: 0
    },
    {
        question: "What is a major concern related to desalination?",
        choices: [
            "A) Increased oxygen levels in the ocean.",
            "B) Production of brine, which harms marine life.",
            "C) Decreased global temperatures."
        ],
        correct: 1
    },
    {
        question: "What is one possible solution to reduce desalination's negative impact?",
        choices: [
            "A) Solar desalination and brine recycling.",
            "B) Increase brine production.",
            "C) Dump brine into coastal waters."
        ],
        correct: 0
    },
    {
        question: "Which country produces the most desalinated water?",
        choices: [
            "A) USA",
            "B) Saudi Arabia",
            "C) India"
        ],
        correct: 1
    },
    {
        question: "How can brine affect marine life?",
        choices: [
            "A) By reducing salinity levels.",
            "B) By increasing salinity and toxicity.",
            "C) By providing more food."
        ],
        correct: 1
    },
    {
        question: "What is brine in the context of desalination?",
        choices: [
            "A) A freshwater byproduct.",
            "B) A highly concentrated saltwater waste.",
            "C) A renewable energy source."
        ],
        correct: 1
    },
    {
        question: "Which of the following is a method of desalination?",
        choices: [
            "A) Reverse osmosis.",
            "B) Filtration through rocks.",
            "C) Electrolysis."
        ],
        correct: 0
    },
    {
        question: "What percentage of the world's freshwater supply comes from desalination?",
        choices: [
            "A) Less than 1%",
            "B) About 10%",
            "C) Over 50%"
        ],
        correct: 0
    },
    {
        question: "Which sector consumes the most desalinated water?",
        choices: [
            "A) Agriculture.",
            "B) Industrial manufacturing.",
            "C) Residential use."
        ],
        correct: 2
    },
    {
        question: "What is a potential benefit of desalination?",
        choices: [
            "A) It provides a consistent freshwater source in arid regions.",
            "B) It reduces sea levels.",
            "C) It increases fish populations."
        ],
        correct: 0
    },
    {
        question: "What is one environmental impact of brine disposal?",
        choices: [
            "A) Decreased ocean temperatures.",
            "B) Harmful effects on benthic (bottom-dwelling) organisms.",
            "C) Increased oxygen levels in seawater."
        ],
        correct: 1
    },
    {
        question: "Which process uses heat to evaporate water in desalination?",
        choices: [
            "A) Reverse osmosis.",
            "B) Thermal distillation.",
            "C) Ion exchange."
        ],
        correct: 1
    },
    {
        question: "What is one way to reduce the environmental impact of desalination plants?",
        choices: [
            "A) Discharging brine directly into coastal areas.",
            "B) Using renewable energy sources.",
            "C) Increasing energy consumption."
        ],
        correct: 1
    },
    {
        question: "What is reverse osmosis?",
        choices: [
            "A) A process that uses high pressure to filter salt out of water.",
            "B) A method of boiling water to remove impurities.",
            "C) A way to add nutrients to water."
        ],
        correct: 0
    },
    {
        question: "Which type of water is typically desalinated?",
        choices: [
            "A) River water.",
            "B) Ocean water.",
            "C) Glacier water."
        ],
        correct: 1
    },
    {
        question: "What can be done with the salt byproduct from desalination?",
        choices: [
            "A) Dump it back into the ocean.",
            "B) Use it for industrial purposes or road de-icing.",
            "C) Burn it as fuel."
        ],
        correct: 1
    },
    {
        question: "How does desalination impact the energy consumption of a region?",
        choices: [
            "A) It reduces energy needs.",
            "B) It increases energy consumption.",
            "C) It has no impact on energy use."
        ],
        correct: 1
    },
    {
        question: "What is an alternative to desalination for increasing freshwater supply?",
        choices: [
            "A) Cloud seeding.",
            "B) Water conservation and recycling.",
            "C) Importing saltwater."
        ],
        correct: 1
    },
    {
        question: "Which of these is a renewable energy source for desalination plants?",
        choices: [
            "A) Nuclear power.",
            "B) Solar power.",
            "C) Natural gas."
        ],
        correct: 1
    },
    {
        question: "What is the main challenge of using desalination in large-scale applications?",
        choices: [
            "A) Lack of technology.",
            "B) High energy and financial costs.",
            "C) Limited saltwater supply."
        ],
        correct: 1
    },
    {
        question: "What happens when brine is not properly diluted before discharge?",
        choices: [
            "A) It purifies the water.",
            "B) It can create dead zones in the ocean.",
            "C) It fertilizes marine plants."
        ],
        correct: 1
    },
    {
        question: "Why is desalination considered an unsustainable solution by some experts?",
        choices: [
            "A) It uses finite freshwater resources.",
            "B) It produces greenhouse gases and brine waste.",
            "C) It reduces global warming."
        ],
        correct: 1
    },
    {
        question: "What is one innovative approach to managing brine waste?",
        choices: [
            "A) Using it for energy generation.",
            "B) Burying it underground.",
            "C) Converting it to table salt."
        ],
        correct: 0
    },
    {
        question: "What role does desalination play in arid countries?",
        choices: [
            "A) It provides a significant portion of their drinking water.",
            "B) It increases rainfall.",
            "C) It depletes natural aquifers."
        ],
        correct: 0
    },
    {
        question: "What is the typical salt content of seawater?",
        choices: [
            "A) 0.1%",
            "B) 3.5%",
            "C) 10%"
        ],
        correct: 1
    },
    {
        question: "What kind of membranes are used in reverse osmosis?",
        choices: [
            "A) Plastic sheets.",
            "B) Semi-permeable membranes.",
            "C) Carbon filters."
        ],
        correct: 1
    },
    {
        question: "What is the impact of desalination on local fish populations?",
        choices: [
            "A) It increases their numbers.",
            "B) It can disrupt habitats and reduce populations.",
            "C) It has no impact."
        ],
        correct: 1
    },
    {
        question: "What is the main byproduct of desalination?",
        choices: [
            "A) Freshwater.",
            "B) Brine.",
            "C) Sand."
        ],
        correct: 1
    }
];
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesContainer = document.getElementById('choices');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const resultMessage = document.getElementById('result-message');
const scoreElement = document.getElementById('score');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesContainer.innerHTML = '';

    currentQuestion.choices.forEach((choice, index) => {
        const choiceButton = document.createElement('button');
        choiceButton.textContent = choice;
        choiceButton.classList.add('btn', 'btn-outline-secondary', 'mb-2');
        choiceButton.onclick = () => selectAnswer(index);
        choicesContainer.appendChild(choiceButton);
    });

    nextButton.disabled = true;
}

function selectAnswer(index) {
    const correctIndex = quizData[currentQuestionIndex].correct;
    if (index === correctIndex) {
        score++;
        alert('Correct!');
    } else {
        alert('Incorrect. The correct answer was: ' + quizData[currentQuestionIndex].choices[correctIndex]);
    }
    nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    resultContainer.style.display = 'block';
    resultMessage.textContent = 'Quiz Completed!';
    scoreElement.textContent = `You scored ${score} out of ${quizData.length}.`;
}

loadQuestion();
