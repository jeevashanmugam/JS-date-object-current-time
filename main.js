
let currentTime = new Date();

let a = currentTime.getHours();

if ((a >= 0) || (a < 5)) {

    document.write(a + "am : It's Midnight");
}

else if ((a >= 5) || (a < 12)) {

    document.write(`${a}am It's Goodmorning`);
}

else if ((a >= 12) || (a < 15)) {

    document.write(`${a}pm It's Goodafternoon`);
}

else if ((a >= 15) || (a < 20)) {

    document.write(`${a}pm It's Goodevening`);
}
else {

    document.write(`${a}pm It's Goodnight`);
}


