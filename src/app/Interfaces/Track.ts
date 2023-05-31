import { IMusicians } from './Musician';

export interface ITrack {
  title: string;
  author: string;
  atwork: string;
  url: string;
  id: number;
  cover: string;
  auditionsCount: number;
  musicians: IMusicians[];
}
