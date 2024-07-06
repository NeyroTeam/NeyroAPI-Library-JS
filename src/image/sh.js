import axios from 'axios';
import fetch from 'node-fetch';

class ImageAPI {
  static sh(api, data) {
    const url = `${api.BASE_URL}/image/sh`;
    return axios.post(url, data, { headers: api.headers })
      .then(response => response.data);
  }

  static async asyncSh(api, data) {
    const url = `${api.BASE_URL}/image/sh`;
    const response = await fetch(url, {
      method: 'POST',
      headers: api.headers,
      body: JSON.stringify(data)
    });
    return await response.json();
  }
}

export { ImageAPI };