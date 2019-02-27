import axios from 'axios';

// Coloque os action creators aqui

const REQUEST_URL = 'http://dev.4all.com:3003/';

export const fetchPosts = () => {
  // fazer pedido HTTP para obter todos os posts
  const request = axios.get(`${REQUEST_URL}/tarefa`);

  return {
    type: 'FETCH_POSTS',
    payload: request   // Promise
  };
};

export const fetchPost = (id) => {
  // faz pedido HTTP
  const request = axios.get(`${REQUEST_URL}/tarefa/${id}`);

  // retorna action
  return {
    type: 'FETCH_POST',
    // vai virar response (resposta) por causa do redux promise
    payload: request
  };
}
