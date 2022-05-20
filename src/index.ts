import { MangaTxProvider } from './providers/mangatx.com';

const provider = new MangaTxProvider();

provider.getWorkDetails('https://mangatx.com/manga/martial-peak-manga/')
  .then(console.log)
  .catch(console.warn)

provider.getChapterDetails('https://mangatx.com/manga/martial-peak-manga/', 'https://mangatx.com/manga/martial-peak-manga/chapter-97-humans-will-fight-to-the-death-for-wealth/')
  .then(console.log)
  .catch(console.warn)
