function timeConversion(s) {
    /*
     * Write your code here.
     */
    const chars = s.split("");
    const ampm = chars[chars.length - 2];
    let hour = Number.parseInt(`${chars[0]}${chars[1]}`, 10);
    if (ampm === "P") {
        if (hour !== 12) {
            hour += 12;
        }
    } else {
        if (hour === 12) {
            hour -= 12;
        }
    }
    hour = hour.toString();
    hour = hour.padStart(2, "0");
    chars[0] = hour[0];
    chars[1] = hour[1];

    // truncate AM / PM ending from string
    return chars.slice(0, chars.length - 2).join("");
}

console.log(timeConversion("12:40:22AM"));