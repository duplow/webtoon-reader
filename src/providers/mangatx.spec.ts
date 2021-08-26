//import { IWorkChapterLink, IWorkLink } from 'src/types/provider';
import { MangaTxProvider } from './mangatx';

const provider = new MangaTxProvider();

const workLink = {
  workUrl: ''
}

const chapterLink = {
  workUrl: workLink.workUrl,
  title: 'Chapter 1',
  chapterUrl: 'asas',
  chapterNumber: 1
}

test('should return found works', () => {
  /*
  provider.searchWorks({ q: 'Texto' })
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