const reverseString = s => {
    let result = s;
    try {
        let chars = s.split("");
        chars.reverse();
        result = chars.join("");
    } catch (error) {
        console.log(error.message);
    }
    console.log(result);
}

const int = Number(1234);
reverseString(int);