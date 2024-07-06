```markdown
# NeyroAPI JavaScript Library

This library provides a JavaScript interface to interact with the Neyro API, supporting text, image, and audio functionalities.

## Installation

To install the library, use npm:

```bash
npm install neyro-api
```

Or from this repository

```bash
npm install https://github.com/NeyroTeam/NeyroAPI-Library#JavaScript
```

## Usage

### Sync API

```javascript
import { NeyroAPI } from 'neyro-api';

const apiKey = "YOUR_API_KEY";
const captchaKey = "Captcha key";
const neyroApi = new NeyroAPI(apiKey, captchaKey);

// Text API
neyroApi.textGptNew({
  messages: ["Hello, how are you?"],
  model: "gpt-3.5-turbo",
  maxTokens: 512,
  temperature: 0.9,
  plugins: [],
  id: "b62f4cc5-0a7b-4044-9267-065c63c24469"
}).then(textResponse => {
  console.log("Text API Response:", textResponse);
});

// Image API
neyroApi.imageSh({
  prompt: "A beautiful landscape",
  width: 512,
  height: 512,
  steps: 50,
  number: 1,
  sampler: "k_lms",
  model: "stable_cascade",
  stream: true
}).then(imageResponse => {
  console.log("Image API Response:", imageResponse);
});

// Audio API
neyroApi.audioTts({
  model: "google",
  voice: "adam",
  text: "Hello, this is a test.",
  language: "en"
}).then(audioResponse => {
  console.log("Audio API Response:", audioResponse);
});
```

### Async API

```javascript
import { AsyncNeyroAPI } from 'neyro-api';

const apiKey = "YOUR_API_KEY";
const captchaKey = "Captcha key";
const asyncNeyroApi = new AsyncNeyroAPI(apiKey, captchaKey);

async function main() {
  const textResponse = await asyncNeyroApi.textGptNew({
    messages: ["Hello, how are you?"],
    model: "gpt-3.5-turbo",
    maxTokens: 512,
    temperature: 0.9,
    plugins: [],
    id: "b62f4cc5-0a7b-4044-9267-065c63c24469"
  });
  console.log("Async Text API Response:", textResponse);

  const imageResponse = await asyncNeyroApi.imageSh({
    prompt: "A beautiful landscape",
    width: 512,
    height: 512,
    steps: 50,
    number: 1,
    sampler: "k_lms",
    model: "stable_cascade",
    stream: true
  });
  console.log("Async Image API Response:", imageResponse);

  const audioResponse = await asyncNeyroApi.audioTts({
    model: "google",
    voice: "adam",
    text: "Hello, this is a test.",
    language: "en"
  });
  console.log("Async Audio API Response:", audioResponse);
}

main();
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
```
MIT License

Copyright (c) 2024 NeyroTeam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
