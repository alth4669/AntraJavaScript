let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

var sum = 0;
for (let s in salaries) {
    sum += salaries[s];
}
console.log(sum);

function multiplyNumeric(obj) {
    for (let x in obj) {
        if (typeof obj[x] == "number") {
            obj[x]*=2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu);
multiplyNumeric(menu);
console.log(menu);

function checkEmailId(str) {
    const pattern = /.*@.+\..*/;
    return str.match(pattern) == null ? false : true;
}

console.log(checkEmailId('test@gmail.com'));
console.log(checkEmailId('test@gmailcom'));
console.log(checkEmailId('testgmail.com'));
console.log(checkEmailId('@.'));
console.log(checkEmailId('@test.'));


function truncate (str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    }
    else {
        var result = str.slice(0,maxlength-1);
        result += "..."
    }
    return result;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));

console.log(truncate("Hi everyone!", 20));

var styles = ["James", "Brennie"]
console.log(styles);
styles.push("Robert");
console.log(styles);
styles[Math.floor(styles.length/2)] = "Calvin";
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift("Rose", "Regal");
console.log(styles);
