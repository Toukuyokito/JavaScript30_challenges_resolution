function getJson(endpoint)
{
    const data = [];

    fetch(endpoint)
    .then(blob => blob.json())
    .then(dataFromEndpoint => data.push(...dataFromEndpoint));

    return data;

}

function findMatches(array, filter)
{
    return array.filter(cities => {

        let regex = new RegExp(filter, "gi"); 

        if (cities.city.search(regex)  !== -1 || 
            cities.state.search(regex) !== -1) {
                return true
            }

    }); 
}

function highLight(string, valueTohighLight)
{
    const regex = new RegExp(valueTohighLight, 'gi');
    return string.replace(regex, `<span class="hl">${valueTohighLight}</span>`)
}

function updateDisplay(target, data, valueTohighLight)
{
    target.innerHTML =  data.map(citie => {
        
        return `
        <li>
            <span>${highLight(citie.city, valueTohighLight)},${highLight(citie.state, valueTohighLight)}</span> <span class="population">${citie.population}</span>
        </li>
        `;
    }).join("");

}

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities   = getJson(endpoint);

const textInput = document.querySelector(".search-form .search");
textInput.addEventListener("input", e => {
    
    matches = findMatches(cities, e.target.value);
    const displayTarget = document.querySelector(".search-form .suggestions");
    updateDisplay(displayTarget, matches, e.target.value);
    
});

