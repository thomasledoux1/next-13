async function getPokemon(slug: string | undefined) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${slug ?? 'ditto'}`
  );
  console.log(`pokemon ${slug} fetched`);
  const pokemonJson = await pokemon.json();
  return pokemonJson;
}

type PageParams = Record<string, string>;
interface PageProps {
  params?: PageParams;
  searchParams?: Record<string, string | string[]>;
}
export default async function Page({ params }: PageProps) {
  console.log('rendering pokemon');
  const slug = params ? params.slug : undefined;
  const pokemonDetail = await getPokemon(slug);
  console.log('rendering pokemon with details fetched', pokemonDetail);

  return (
    <div>
      {pokemonDetail.name} {pokemonDetail.weight}
    </div>
  );
}

export async function generateStaticParams() {
  const pokemons = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=5&offset=0'
  );
  const pokemonsJson = await pokemons.json();
  console.log('generating static params');
  console.log(pokemonsJson);
  return pokemonsJson.results.map((poke: any) => ({
    slug: poke.name,
  }));
}
