import { MangaTxProvider } from './providers/mangatx';

const provider = new MangaTxProvider();

console.log('OK 123')

provider.searchWorks({ q: 'Texto' })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.warn(err)
  })