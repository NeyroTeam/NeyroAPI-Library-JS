import axios from 'axios';
import fetch from 'node-fetch';

class Groq {
  static groq(api, data) {
    const url = `${api.BASE_URL}/text/groq`;
    return axios.post(url, data, { headers: api.headers })
      .then(response => response.data);
  }

  static async asyncGroq(api, data) {
    const url = `${api.BASE_URL}/text/groq`;
    const response = await fetch(url, {
      method: 'POST',
      headers: api.headers,
      body: JSON.stringify(data)
    });
    return await response.json();
  }
}

export { Groq };
