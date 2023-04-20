import { Component, Input, Output, EventEmitter } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { ChatService } from './chat.service';
import { hasFlag } from 'country-flag-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private chatService: ChatService) {
    setTheme('bs5'); // or 'bs4'
  }
  title = 'MST-GOLFSCORE-ANG-TEST';
  golfName = '';
  golfData = [];
  newMessage = '';
  messageList: any[] = [];
  check = true;
  goldHoles = Array(18);
  socketStatus = '';
  slideChangeNumber = 0;
  ngOnInit() {
    // socket io setting
    let { message, status } = this.chatService.getNewMessage();
    message.subscribe((message) => {
      console.log('appCompoent', message);
      if (message !== '') {
        this.messageList.push(message);
      }
    });
    status.subscribe((status) => {
      this.socketStatus = status;
    });
  }
  log(event: number) {
    // simple hack for expression has been changed error
    setTimeout(() => {
      this.slideChangeNumber = Number(event);
    });
  }
  getGolfHoleStrokesNumber(player: any, number: number) {
    return player[`Hole${number}Strokes`] || 0;
  }
  getIcon(sex: string, number: number) {
    return `
    <img src="./assets/golf${(number % 4) + 1}.png" alt="image"/>`;
  }
  getGolfHoleStpNumber(player: any, number: number) {
    return player[`Hole${number}STP`] || 0;
  }
  getFlag(national: string) {
    let country = national.slice(0, 2);
    if (national === 'ENG') {
      country = 'GB';
    } else if (national === 'SWE') {
      country = 'SE';
    }

    if (hasFlag(country)) {
      return `<img
      alt="${national}"
      src="http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg"/>
    `;
    } else {
      return `<div class="empty-flag">
                <div class="spinner-border" role="status">
                 
                </div>
              </div>`;
    }
  }
  getList() {
    return this.messageList;
  }
}
