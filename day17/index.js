const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
                'Norma Jean', 'The Bled', 'Say Anything',  'The Midway State', 
                'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 
                'An Old Dog'];

const ignoreListe = ["the", "we", "a", "an", "oh,"];

function foundIndexStartCompare(wordList)
{
    if(ignoreListe.includes(wordList[0].toLowerCase() )) return 1;

    return 0;

}
function sortBand()
{
    const sorted = bands.sort((bandA, bandB) => {
        let splitA = bandA.split(" ");
        let splitB = bandB.split(" ");

        let indexA = foundIndexStartCompare(splitA);
        let indexB = foundIndexStartCompare(splitB);
        
        return splitA[indexA][0] > splitB[indexB][0]; 

    }); 

    ulbands.innerHTML =  sorted.map(band => `<li> ${band} </li>`)
    .join("");
}

const ulbands     = document.querySelector("#bands");
ulbands.innerHTML =  bands.map(band => `<li> ${band} </li>`)
                          .join("");    

document.querySelector("button")
        .addEventListener("click", sortBand);