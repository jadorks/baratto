import { Injectable } from '@angular/core';
import Talk from 'talkjs';

@Injectable({
  providedIn: 'root'
})
export class TalkService {
  private currentUser: Talk.User;
  async createUser(applicationUser: any) {
    await Talk.ready;
    return new Talk.User({
      id: applicationUser.id,
      name: applicationUser.username,
    });
  }

  async createCurrentSession() {
    await Talk.ready;
    const user = {
      id: 1,
      username: 'Alice',
      email: 'demo@talkjs.com',
      photoUrl: 'https://demo.talkjs.com/img/alice.jpg',
      welcomeMessage: 'Hey there! How are you? :-)',
      role: 'booker'
    };
    this.currentUser = await this.createUser(user);
    const session = new Talk.Session({
         appId: 'tFZQ51MC',
         me: this.currentUser
    });
    return session;
  }

  private async getOrCreateConversation(session: Talk.Session, otherApplicationUser: any) {
    const otherUser = await this.createUser(otherApplicationUser);
    const conversation = session.getOrCreateConversation(Talk.oneOnOneId(this.currentUser, otherUser));
    conversation.setParticipant(this.currentUser);
    conversation.setParticipant(otherUser);
    return conversation;
  }

  async createInbox(session: Talk.Session) {
    const otherApplicationUser = {
      id: 5,
      username: 'Lo',
      email: 'demo@talkjs.com',
      photoUrl: 'https://demo.talkjs.com/img/sebastian.jpg',
      welcomeMessage: 'Hey, how can I help?',
      role: 'booker'
    };

    const conversation = await this.getOrCreateConversation(session, otherApplicationUser);
    return session.createInbox({selected: conversation});
 }

 
  constructor() { }
}


