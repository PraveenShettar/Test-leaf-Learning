function StudentResult(Score) {

    switch (true) {

        case (Score >= 90):
            console.log("Grade A");
            break;

        case (Score >= 80):
            console.log("Grade B");
            break;

        case (Score >= 70):
            console.log("Grade C");
            break;

        default:
            console.log("Grade D");
    }
}

StudentResult(30)
