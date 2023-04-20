import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  public status$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  socket = io('https://mst-full-stack-dev-test.herokuapp.com/');

  // sendMessage(message: any) {
  //   console.log('sendMessage: ', message);
  //   this.socket.emit('message', message);
  // }

  getNewMessage = () => {
    // this.socket.on('message', (message) => {
    //   console.log(message);
    //   this.message$.next(message);
    // });
    // server-sideide
    this.socket.on('connect', () => {
      console.log('connect', this.socket);
      this.status$.next('connect');
    });
    this.socket.on('data-update', (message) => {
      console.log('data-update', message);
      this.message$.next(message);
    });

    this.socket.on('disconnect', () => {
      console.log('disconnect', this.socket);
      this.status$.next('disconnect');
      // setTimeout(() => {
      //   this.socket.emit('connect', 'ping');
      // }, 10000);
    });

    return {
      message: this.message$.asObservable(),
      status: this.status$.asObservable(),
    };
  };
}
