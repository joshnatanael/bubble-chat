import { Injectable } from '@nestjs/common';
import { ChatroomsRepository } from './chatrooms.repository';
import { Chatroom } from './chatrooms.model';

@Injectable()
export class ChatroomsService {
  constructor(private chatroomsRepository: ChatroomsRepository) {}

  getAllByUser(userId: string): Promise<Chatroom[]> {
    return this.chatroomsRepository.getAllByUserId(userId);
  }

  // create(userId: string, userIds: string[]): Promise<Chatroom> {
  //   return this.chatroomsRepository.create([...userIds, userId]);
  // }
}
