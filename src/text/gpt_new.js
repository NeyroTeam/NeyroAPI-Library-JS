import axios from 'axios';
import fetch from 'node-fetch';

class GptNew {
  static gptNew(api, data) {
    const url = `${api.BASE_URL}/text/gpt-new`;
    return axios.post(url, data, { headers: api.headers })
      .then(response => response.data);
  }

  static async asyncGptNew(api, data) {
    const url = `${api.BASE_URL}/text/gpt-new`;
    const response = await fetch(url, {
      method: 'POST',
      headers: api.headers,
      body: JSON.stringify(data)
    });
    return await response.json();
  }
}

export { GptNew };
