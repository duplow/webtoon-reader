import { IWorkDetails } from './IWorkDetails';

export interface IWorkLink {
  provider: string,
  workUrl: string,
  details?: IWorkDetails
}

export default IWorkLink