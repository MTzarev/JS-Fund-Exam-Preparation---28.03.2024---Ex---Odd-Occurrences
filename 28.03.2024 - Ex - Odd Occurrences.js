function oddOccurrences(input) {
    let wordArr = input.split(' ');
    let wordObj = {};
    let finalArr = [];
  
    for (let word of wordArr) {
        word = word.toLowerCase();
        if (!wordObj.hasOwnProperty(word)) {
            wordObj[word] = 1;
        } else {
            wordObj[word]++;
        }
    }

    for (let word in wordObj) {
        if (wordObj[word] % 2 !== 0) {
            finalArr.push(word);

        }
    }
    //let sorted = Object.keys(wordObj).sort((a,b)=>a[0] - b[0])
    //finalArr.sort((a,b)=>a.localeCompare(b))
    console.log(finalArr.join(` `));
}
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');