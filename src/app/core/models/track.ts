import { Artist } from "./artist";
import { TrackDistribution } from "./track-distribution";

export interface Track {

  id: number;

  title: string;

  artistId: number;

  artist?: Artist;

  isrc: string;

  releaseDate: string;

  genre: string;

  status: string;

  trackDistributions?: TrackDistribution[];
}