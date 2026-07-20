import { Distribution } from "./distribution";
export interface TrackDetails {
  id: number;
  title: string;
  artistName: string;
  genre: string;
  isrc: string;
  releaseDate: string;
  status: number;
  distributions: Distribution[];
}