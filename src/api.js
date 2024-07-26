import axios from 'axios';
import { GptNew, Filter, DeepSeek } from './text/index.js';
import { ImageAPI } from './image/index.js';
import { AudioAPI } from './audio/index.js';

class NeyroAPI {
  constructor(apiKey, captchaKey) {
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'x-captcha-token': captchaKey
    };
    this.BASE_URL = 'https://api.neyrogen.online';
  }

  textGptNew(data) {
    return GptNew.gptNew(this, data);
  }

  imageSh(data) {
    return ImageAPI.sh(this, data);
  }

  audioTts(data) {
    return AudioAPI.tts(this, data);
  }

  textFilter(data) {
    return Filter.filter(this, data);
  }

  textDeepSeek(data) {
    return DeepSeek.deepseek(this, data);
  }
}

export { NeyroAPI };
