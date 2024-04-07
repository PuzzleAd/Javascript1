
// შექმენი ცვლადი რომელსაც ბრაუზერიდან გადავცემთ სიტყვას მაგალითად Apple-ი, 
// გადაცემული სიტყვა უნდა შემოწმდეს იწყება თუ არა ხმოვანი ასოთი.


let word = String(prompt("Enter Word of your Choice: "));
let alphabet;

if(word !== ""){
    alphabet = word[0].toUpperCase();
}



if (alphabet === "A" || alphabet === "E" || alphabet === "I" || alphabet === "O" || alphabet === "U" || alphabet === "Y") {
    alert(`${word} starts with a vowel!!!`);
} else if(word === ""){
    alert(`please enter something, you can't leave it blank!!`);
}else{
    alert(`${word} starts with the consonant!!`);
}
