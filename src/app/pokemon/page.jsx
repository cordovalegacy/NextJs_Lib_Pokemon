import getAllPokemon from "@/lib/getAllPokemon"
import Link from "next/link"

const AllPokemonPage = async () => {

    const pokeData = await getAllPokemon()
    const pokemon = await pokeData.results
    console.log(pokeData)

    return (
        <div className="flex flex-wrap">
            {pokemon.map((eachPokemon, idx) => (
                <Link
                    className="p-2 m-2 w-[100px] h-[100px] text-center border border-amber-500"
                    key={idx}
                    href={`/pokemon/${eachPokemon.name}`}
                >{eachPokemon.name}</Link>
            ))}
        </div>
    )
}

export default AllPokemonPage
