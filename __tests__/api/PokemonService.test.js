import PokemonService from '../../src/api/PokemonService';

describe('PokemonService API', () => {
  it('should respond with a correct pokemon', async () => {
    const response = await PokemonService.getPokemon(1);

    expect(response.name).toEqual('bulbasaur');
  });

  it('should respond with a list pokemons', async () => {
    const response = await PokemonService.getAllPokemons({
      offset: 30,
      limit: 30,
    });

    expect(response.results).toHaveLength(30);
  });

  it('should respond with an evolution chain ', async () => {
    const response = await PokemonService.getEvolutionByURL(
      'https://pokeapi.co/api/v2/evolution-chain/1',
    );

    expect(response.chain.species.name).toEqual('bulbasaur');
    expect(response.chain.evolves_to[0].species.name).toEqual('ivysaur');
    expect(response.chain.evolves_to[0].evolves_to[0].species.name).toEqual(
      'venusaur',
    );
  });

  it('should respond with a list of moves', async () => {
    const response = await PokemonService.getAllMoves({
      offset: 30,
      limit: 30,
    });

    expect(response.results).toHaveLength(30);
  });

  it('should respond with a list of pokemons', async () => {
    const response = await PokemonService.getAllPokemonByURL(
      'https://pokeapi.co/api/v2/move/31/',
    );

    expect(response.learned_by_pokemon).toHaveLength(46);
  });

  it('should respond with a list of berries', async () => {
    const response = await PokemonService.getAllBerries({
      offset: 20,
      limit: 20,
    });

    expect(response.results).toHaveLength(20);
  });

  it('should respond with a berry', async () => {
    const response = await PokemonService.getBerryByURL(
      'https://pokeapi.co/api/v2/berry/21/',
    );

    expect(response.name).toEqual('pomeg');
  });

  it('should respond a berry with image', async () => {
    const response = await PokemonService.getBerryItemByURL(
      'https://pokeapi.co/api/v2/item/146/',
    );

    expect(response.sprites.default).toEqual(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/pomeg-berry.png',
    );
  });

  it('should respond a pokemon specie to get evolution chain', async () => {
    const response = await PokemonService.getPokemonSpeciesByURL(
      'https://pokeapi.co/api/v2/pokemon-species/132/',
    );

    expect(response.evolution_chain.url).toEqual(
      'https://pokeapi.co/api/v2/evolution-chain/66/',
    );
  });
});
