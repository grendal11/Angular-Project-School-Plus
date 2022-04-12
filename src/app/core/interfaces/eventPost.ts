import { IBase } from './base';
import { IEvent } from './event';
import { IUser } from './user';

export interface IEventPost extends IBase {
  likes: string[];
  dislikes: string[];
  text: string;
  userId: IUser;
  eventId: IEvent;
}
