function calculate() {
    const answer = document.querySelector(
        'input[name="answer"]:checked'
    );
    document.getElementById("result").textContent =
        "Score: " + (answer && answer.value === correctAnswer ? 1 : 0);
}