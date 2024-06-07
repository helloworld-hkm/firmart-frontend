import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; 
const handleError = (error) => {
  console.error('API Error:', error.response || error);
  throw error;
};
const api = {
  // endpoint transactions
  getTransactions: () => {
    return axios.get(`${API_URL}/transactions`)
      .then(response => response.data)
      .catch(handleError);
  },
  postTransactions: (data) => {
    console.log('this is data',data)
    return axios.post(`${API_URL}/transactions  `,data)
      .then(response => response.data)
      .catch(handleError);
  },
  putTransactions: (id,data) => {
    console.log('this is data',data)
    return axios.put(`${API_URL}/transactions/${id} `,data)
      .then(response => response.data)
      .catch(handleError);
  },
  getTransactionsById:(id)=>{
    return axios.get(`${API_URL}/transactions/${id}`)
    .then(response =>response.data)
    .catch(handleError)
  },
  searchTransactions:(keyword)=>{
    return axios.get(`${API_URL}/search/${keyword}`)
    .then(response =>response.data)
    .catch(handleError)
  },
  groupTransactions:(type)=>{
    return axios.get(`${API_URL}/type/${type}`)
    .then(response =>response.data)
    .catch(handleError)
  },
  rangeTransactions:(type,from,to)=>{
    return axios.get(`${API_URL}/type/${type}/${from}/${to}`)
    .then(response =>response.data)
    .catch(handleError)
  },
  getOrderTransactions:(by)=>{
    return axios.get(`${API_URL}/sort/${by}`)
    .then(response =>response.data)
    .catch(handleError)
  },
  deleteTransactions:(id)=>{
    return axios.delete(`${API_URL}/transactions/${id}`)
    .then(response =>response.data)
    .catch(handleError)
  },
  // endpoint items
  getItems: () => {
    return axios.get(`${API_URL}/items`)
      .then(response => response.data)
      .catch(handleError);
  },
  //endpoint Types
  getTypes: () => {
    return axios.get(`${API_URL}/types`)
      .then(response => response.data)
      .catch(handleError);
  },
  


 
};

export default api;
