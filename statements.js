/**
 * sequence
 * 
 * selection- we can choose to run certain codes and not others
 * repetition- we can choose to do sth until a condition is met
 * 
 * default sequence- excecutes from left to right, top to bottom
 */

//selection using if statement
const age = 25

if (age > 18) {
    console.log("Can vote")
} else {
    console.log("Cannot vote")
}

console.log("Program still running")

//users- students, tms, pod leads
const user = "student"
const userType = "tm"

if (user === "student") {
    if (userType === "tm") {
        console.log("Student/TM logged in");
    } else {
        console.log("Student logged in");
    }
} else if (user === "tm") {
    console.log("TM logged in")
} else if (user === "pod") {
    console.log("Pod lead logged in")

}

//2. selection using switch statement
switch (user) {
    case "student":
        userType === "tm" ? console.log("student/Tm") : console.log("Student logged in")
        break;
    case ("tm"):
        console.log("TM logged in")
    case ("pod"):
        console.log("Pod lead logged in")            
        break;
}

//3.repetition using
//syntax (while statement)
//infinity loop. can be terminated using ctrl + c
//while (true) {"executing this block of code"}

//natural terminating
let count = 0

while (count <= 5) {
    console.log(`count ${count}`)

    count = count + 1
}

console.log(count)

//4. Repetition using do/while
//will always run atleast once
let countTwo = 0

do {
    console.log(`count: ${countTwo}`)
    countTwo = countTwo + 1
} while (countTwo < 5);