import axios from 'axios';

import fetch from 'node-fetch';



class DeepSeek {

  static deepseek(api, data) {

    const url = `${api.BASE_URL}/text/deepseek`;

    return axios.post(url, data, { headers: api.headers })

      .then(response => response.data);

  }



  static async asyncDeepSeek(api, data) {

    const url = `${api.BASE_URL}/text/deepseek`;

    const response = await fetch(url, {

      method: 'POST',

      headers: api.headers,

      body: JSON.stringify(data)

    });

    return await response.json();

  }

}



export { DeepSeek };
