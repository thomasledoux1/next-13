import Link from 'next/link';

async function getPokemons() {
  const pokemons = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=5&offset=5'
  );
  const pokemonsJson = await pokemons.json();
  return pokemonsJson;
}

export default async function HomePage() {
  const pokemons = await getPokemons();
  return (
    <ul>
      {pokemons.results.map((pokemon: any) => (
        <li key={pokemon.name}>
          <Link href={`/${pokemon.name}`}>{pokemon.name}</Link>
        </li>
      ))}
    </ul>
  );
}
