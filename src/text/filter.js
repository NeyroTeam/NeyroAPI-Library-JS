import axios from 'axios';
import fetch from 'node-fetch';

class Filter {
  static filter(api, data) {
    const url = `${api.BASE_URL}/text/filter`;
    return axios.post(url, data, { headers: api.headers })
      .then(response => response.data);
  }

  static async asyncFilter(api, data) {
    const url = `${api.BASE_URL}/text/filter`;
    const response = await fetch(url, {
      method: 'POST',
      headers: api.headers,
      body: JSON.stringify(data)
    });
    return await response.json();
  }
}

export { Filter };
