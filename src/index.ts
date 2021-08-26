import { MangaTxProvider } from './providers/mangatx.com';

const provider = new MangaTxProvider();

provider.searchWorks({ q: 'Texto' })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.warn(err)
  })