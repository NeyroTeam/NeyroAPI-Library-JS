import fetch from 'node-fetch';
import { GptNew, Filter, DeepSeek, Groq } from './text/index.js';
import { ImageAPI } from './image/index.js';
import { AudioAPI } from './audio/index.js';

class AsyncNeyroAPI {
  constructor(apiKey, captchaKey) {
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'x-captcha-token': captchaKey
    };
    this.BASE_URL = 'https://api.neyrogen.online';
  }

  async textGptNew(data) {
    return await GptNew.asyncGptNew(this, data);
  }

  async imageSh(data) {
    return await ImageAPI.asyncSh(this, data);
  }

  async audioTts(data) {
    return await AudioAPI.asyncTts(this, data);
  }

  async textFilter(data) {
    return await Filter.asyncFilter(this, data);
  }

  async textDeepSeek(data) {
    return await DeepSeek.asyncDeepSeek(this, data);
  }

  async textGroq(data) {
    return await Groq.asyncGroq(this, data);
  }

}

export { AsyncNeyroAPI };
