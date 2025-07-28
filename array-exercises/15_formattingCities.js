
const cityNames=["lisBOa", "marbella","vallettA", "Split", "theSSaloniKI", "napoLi", "sALERNO"];
const formattedCities = cityNames.map ((city) => city[0].toUpperCase()+city.slice(1,).toLowerCase());
const citiesWithS = cityNames.filter ((city)=> (city[0]==="s") || (city[0]==="S"));

console.log(`Original array: ${cityNames}
Formatted array: ${formattedCities}
Cities that start with 's'/'s' (unformatted): ${citiesWithS}`);
