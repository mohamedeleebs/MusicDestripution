import { Artist } from "./artist";
import { TrackDistribution } from "./track-distribution";

export interface Track {

  id: number;

  title: string;

  artistId: number;

  artistName?: Artist;

  isrc: string;

  releaseDate: string;

  genre: string;

  status: number;

  trackDistributions?: TrackDistribution[];
}
export enum TrackStatus {
  Draft = 0,
  Submitted = 1,
  Distributed = 2
}