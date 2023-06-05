import { Timestamp } from "firebase/firestore";

export interface UserDocument {
  uid: string;
  email: string;
  howYouKnewUs: string;
  created_at: Timestamp;
}

export interface UserInterface {
  uid: string;
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  phoneNumber: string | null;
  photoURL: string | null;
  userDocument?: UserDocument;
}
