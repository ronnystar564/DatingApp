import { Photo } from "./Photo";

export interface Member {
  id: number;
  username: string;
  age: number;
  gender: string;
  knownAs: string;
  created: Date;
  lastActive: Date;
  photoUrl: string;
  city: string;
  country: string;
  interests?: string;
  introduction?: string;
  lookingFor?: string;
  photos?: Photo[];
}
