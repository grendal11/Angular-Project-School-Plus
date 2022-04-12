import { IBase } from './base';
import { IUser } from './user';

export interface IEvent<T = string> extends IBase {
  subscribers: string[];
  eventPosts: T[];
  eventName: string;
  userId: IUser;
}

