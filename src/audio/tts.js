import axios from 'axios';
import fetch from 'node-fetch';

class AudioAPI {
  static tts(api, data) {
    const url = `${api.BASE_URL}/audio/tts`;
    return axios.post(url, data, { headers: api.headers })
      .then(response => response.data);
  }

  static async asyncTts(api, data) {
    const url = `${api.BASE_URL}/audio/tts`;
    const response = await fetch(url, {
      method: 'POST',
      headers: api.headers,
      body: JSON.stringify(data)
    });
    return await response.json();
  }
}

export { AudioAPI };