function checkVowel(letter){
    const vowels = ["a", "e", "i", "o", "u"];
    if(vowels.includes(letter)){
        return true;
    }
}

function vowelCount(string){
    const vowelMap = new Map();
    for(const char of string){
        let lowerChar = char.toLowerCase();
        if(checkVowel(lowerChar)){
            if(vowelMap.has(lowerChar)){
                vowelMap.set(lowerChar , vowelMap.get(lowerChar)+1 );
            }
            else{
                vowelMap.set(lowerChar , 1);
            }
        }
    }
    return vowelMap;
}

const a = vowelCount("Hi my name is devansh");
console.log(a);