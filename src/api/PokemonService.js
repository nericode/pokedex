import Axios from 'axios';

import {Environment} from '../Env.js';
import Logger from '../utils/helpers/Logger.js';

class PokemonService {
  getAllPokemons = async ({offset, limit = 20}) => {
    const url = `${Environment.api}pokemon?limit=${limit}&offset=${offset}`;
    return await Axios({
      method: 'GET',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(json => json.data)
      .then(response => response)
      .catch(msg => Logger.error(msg));
  };

  getPokemon = async nameOrId => {
    const url = `${Environment.api}pokemon/${nameOrId}`;
    return await Axios({
      method: 'GET',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(json => json.data)
      .then(response => response)
      .catch(msg => Logger.error(msg));
  };

  getEvolutionByURL = async url => {
    return await Axios({
      method: 'GET',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(json => json.data)
      .then(response => response)
      .catch(msg => Logger.error(msg));
  };

  getAllMoves = async ({offset, limit = 30}) => {
    const url = `${Environment.api}move?limit=${limit}&offset=${offset}`;
    return await Axios({
      method: 'GET',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(json => json.data)
      .then(response => response)
      .catch(msg => Logger.error(msg));
  };

  getAllPokemonByURL = async url => {
    return await Axios({
      method: 'GET',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(json => json.data)
      .then(response => response)
      .catch(msg => Logger.error(msg));
  };

  getAllBerries = async ({offset, limit = 30}) => {
    const url = `${Environment.api}berry?limit=${limit}&offset=${offset}`;
    return await Axios({
      method: 'GET',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(json => json.data)
      .then(response => response)
      .catch(msg => Logger.error(msg));
  };

  getBerryByURL = async url => {
    return await Axios({
      method: 'GET',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(json => json.data)
      .then(response => response)
      .catch(msg => Logger.error(msg));
  };

  getBerryItemByURL = async url => {
    return await Axios({
      method: 'GET',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(json => json.data)
      .then(response => response)
      .catch(msg => Logger.error(msg));
  };

  getPokemonSpeciesByURL = async url => {
    return await Axios({
      method: 'GET',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(json => json.data)
      .then(response => response)
      .catch(msg => Logger.error(msg));
  };
}

export default new PokemonService();
