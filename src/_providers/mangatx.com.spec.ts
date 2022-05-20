//import { IWorkChapterLink, IWorkLink } from 'src/types/provider';
import { MangaTxProvider } from './mangatx.com';

const provider = new MangaTxProvider();

const workLink = {
  workUrl: 'https://mangatx.com/manga/release-that-witch'
}

const chapterLink = {
  workUrl: workLink.workUrl,
  title: 'Chapter 309',
  chapterUrl: 'https://mangatx.com/manga/release-that-witch/chapter-309/',
  chapterNumber: 309
}

test('should return found works', () => {
  /*
  provider.searchWorks({ q: 'Release that witch' })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.warn(err)
    })
  */
})

test('should return work details', () => {
  /*
  provider.getWorkDetails(workLink);
  */
})

test('should return chapter details', () => {
  /*
  provider.getChapterDetails(workLink, chapterLink);
  */
});