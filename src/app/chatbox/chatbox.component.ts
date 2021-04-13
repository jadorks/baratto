import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TalkService } from 'src/app/talk.service';
import Talk from 'talkjs';

@Component({
  selector: 'app-root',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss'],
})
export class ChatboxComponent implements OnInit {
  private inbox: Talk.Inbox;
  private session: Talk.Session;

  constructor(
    private talkService: TalkService,
  ) { }

  @ViewChild('talkjsContainer') talkjsContainer!: ElementRef;

  ngOnInit() {
    this.createInbox();
  }

  private async createInbox() {
    const session = await this.talkService.createCurrentSession();
    this.inbox = await this.talkService.createInbox(session);
    this.inbox.mount(this.talkjsContainer.nativeElement);
    
}
