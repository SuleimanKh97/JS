function tellFortune(numOfChild, jobTitle, geoLocation, partnerName) {
    console.log("You will be a " + jobTitle + " in " + geoLocation + " , and married to " + partnerName + " with " + numOfChild + " kids.");

}
// tellFortune(1,2,3,4);

function calculateDogAge(ageOfYourDog) {
    ageOfYourDog = ageOfYourDog * 7
    console.log("Your doggie is " + ageOfYourDog + " years old in dog years!");
}
// calculateDogAge(3);

function calculateSupply(age, amountPerDay) {
    let rest;
    rest = ((100 - age) * 365) * amountPerDay
    console.log("You will need " + rest + " cups of tea to last you until the ripe old age of 100");

}
// calculateSupply(30 , 3);

function greet(name) {
    return "hello" + name;
}



// function double(cat) {
//     return 2 * x;
// }

// function double(seven) {
//     return 2 * 7;
// }

// function double(seven) {
//     return 2 * 'x';
// }


// function double1(x) {
//     return 2 * x ;
//   }

//   function double2 (x){
//   return 2 * x;
//   }

//   function double3(x)  {
//     return 2 * x;
//   }


function cube(length) {
    length = length * length * length;
    console.log(length)
}


function multiply(num1, num2) {
    let multi;
    multi = num1 * num2;
    console.log(multi)
}


function canIGetADrivingLicense(age) {
    let rest;
    rest = 20 - age;
    if (age >= 20)
        console.log("yes you can")
    else
        console.log("please come back after " + age + " years to get one")
}

function sameLength(one, two) {
    one = one.length;
    two = two.length;
    if (one > two || two > one)
        console.log("false");
    else
        console.log("true");


}

sameLength("ameer", "faladh"); //?



function largerNubmer(num1, num2) {
    if (num1 > num2)
        return num1;
    else if (num2 > num1)
        return num2;
    else
        return "even"
}
console.log(largerNubmer(3, 5));


function smallerNubmer(num1, num2, num3) {
    if (num1 < num2 && num1 < num3)
        return num1;
    else if (num2 < num1 && num2 < num3)
        return num2;
    else if (num3 < num1 && num3 < num2)
        return num3
}


console.log(smallerNubmer(4, 5, 6));


function longerString(w1, w2, w3, w4, w5) {
    var words = [w1, w2, w3, w4, w5];
    var max = w1.length;
    for (let i = 0; i < words.length; i++) {
        if (words[i + 1].length > words[i].length)
            max = words[i + 1].length;
        

    }
    return max;
}

console.log(longerString('wgee', 'wewgggefs', 'sdsdffsf', 'sdgsdgsdg', 'sdgsdsdg'));



function isEven(num) {
    if (num % 2 == 0)
        return "true";
    else
        return "false";
}


function isOdd(num) {
    if (num % 2 == 0)
        return "false";
    else
        return "true";
}


function positive(num) {
    if (num >= 0)
        return num;
    else
        retern(-1 * num);
}


function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}


function average(n1, n2, n3, n4, n5) {
    let avag = (n1 + n2 + n3 + n4 + n5) / 5;
    return avag;
}


function randomNumber() {
    return Math.random();
}

console.log(randomNumber());


function randomBetweenNumbers(min, max) {

    return (Math.random() * (max - min + 1));
}
console.log(randomBetweenNumbers(1, 47));


function scoreInUniversty(grade) {

    if (grade >= 95 && grade <= 100)
        return "A";

    else if (grade <= 94 && grade >= 85)
        return "B";

    else if (grade <= 84 && grade >= 70)
        return "C";

    else if (grade <= 69 && grade >= 50)
        return "D";

    else if (grade <= 49 && grade >= 0)
        return "F";

    else
        return "enter a valid Grade"


}
console.log(scoreInUniversty(100));



var count = 0;
function counter() {
    count = count + 1;
    return count;
}

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


function resetCounter() {
    console.log(count + " and the counter reset now");
    count = 0;
}
resetCounter()
console.log(counter());
console.log(counter());
console.log(counter());