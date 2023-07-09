
export default async function getAllPokemon() {
    
    // !API Call
    const res = await fetch('https://pokeapi.co/api/v2/pokemon')
    
    // !Handle Errors
    if(!res.ok) throw new Error("Could not fetch all pokemon")

    // !Handle Results
    const data = await res.json()
    return data

}
