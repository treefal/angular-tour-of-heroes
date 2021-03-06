import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  // The messageService property must be public because
  // it is going to be bound with the (HTML) template.
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}
}
