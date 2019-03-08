let outputElement = document.getElementById("output");

async function search (){
    let inputElement = document.getElementById("country");
    let input = inputElement.value;

    let response = await fetch("https://restcountries.eu/rest/v2/name/" + input);
        let json = await response.json();
        console.log(json);

        for(let country of json){
            let heading = document.createElement("h4");
            heading.textContent = country.name;

            let p = document.createElement("p");
            p.textContent = "Capital is " + country.capital + " and the population is " + country.population;

            let img = document.createElement("img");
            img.src = country.flag;
            img.width = 200;

            outputElement.textContent = "";
            outputElement.appendChild(heading);
            outputElement.appendChild(p);
            outputElement.appendChild(img);
        }
}