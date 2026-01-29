document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let hindi = Number(document.getElementById("hindi").value);
    let english = Number(document.getElementById("english").value);
    let maths = Number(document.getElementById("maths").value);
    let science = Number(document.getElementById("science").value);
    let sanskrit = Number(document.getElementById("sanskrit").value);

    if (
        hindi < 0 || hindi > 100 ||
        english < 0 || english > 100 ||
        maths < 0 || maths > 100 ||
        science < 0 || science > 100 ||
        sanskrit < 0 || sanskrit > 100
    ) {
        alert("Marks must be between 0 to 100");
        return;
    }
    showResult(hindi, english, maths, science, sanskrit);
});

function showResult(hindi, english, maths, science, sanskrit) {

    let total = getSum(hindi, english, maths, science, sanskrit);
    let percentage = getAvg(total);
    let grade = getGrade(percentage);

    document.getElementById("total").innerText = total;
    document.getElementById("percentage").innerText = percentage.toFixed(2) + "%";
    document.getElementById("grade").innerText = grade;

    document.getElementById("showGrade").style.display = "block";
}


function getSum(hindi, english, maths, science, sanskrit) {
    return hindi + english + maths + science + sanskrit;
}
function getAvg(total) {
    return (total / 500) * 100;
}
function getGrade(percentage) {
    let grade;

    switch (true) {
        case (percentage >= 90):
            grade = "A+";
            break;

        case (percentage >= 80):
            grade = "A";
            break;

        case (percentage >= 70):
            grade = "B";
            break;

        case (percentage >= 60):
            grade = "C";
            break;

        case (percentage >= 50):
            grade = "D";
            break;

        case (percentage >= 33):
            grade = "E";
            break;

        default:
            grade = "F (Fail)";
    }

    return grade;
}
