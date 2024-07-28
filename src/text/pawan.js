import axios from 'axios';
import fetch from 'node-fetch';

class Pawan {
  static pawan(api, data) {
    const url = `${api.BASE_URL}/text/pawan`;
    return axios.post(url, data, { headers: api.headers })
      .then(response => response.data);
  }

  static async asyncPawan(api, data) {
    const url = `${api.BASE_URL}/text/pawan`;
    const response = await fetch(url, {
      method: 'POST',
      headers: api.headers,
      body: JSON.stringify(data)
    });
    return await response.json();
  }
}

export { Pawan };
