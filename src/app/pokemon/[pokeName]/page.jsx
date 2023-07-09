import getOnePokemon from '@/lib/getOnePokemon'

const OnePokemonPage = async ({ params }) => {

    console.log(params)
    const pokemon = await getOnePokemon(params.pokeName)
    console.log(pokemon)

    return (
        <div className="flex flex-wrap w-1/2 mx-auto mt-10">
                <div className="border text-center border-blue-500 rounded-sm w-[100px] h-[150px]">
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </div>
        </div>
    )
}

export default OnePokemonPage
