
export default async function getOnePokemon(pokeName) {
    
    // !API Call
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)

    // !Handle Errors
    if(!res.ok) throw new Error("Could not fetch one pokemon")

    // !Handle Results
    return res.json()

}
