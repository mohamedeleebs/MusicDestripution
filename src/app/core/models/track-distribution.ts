import { Dsp } from "./dsp";

export interface TrackDistribution {
  id: number;
  dspId: number;
  dsp?: Dsp;

  submittedAt: string;

  status: string;
}