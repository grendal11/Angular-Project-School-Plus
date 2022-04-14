import { IBase } from './base';

export interface IUser extends IBase {
  events: string[];
  eventPosts: string[];
  tel: string;
  email: string;
  username: string;
  password: string;
  role: string;
  schoolId: string;
}
