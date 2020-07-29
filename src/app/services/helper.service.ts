import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private modalActiveSource = new BehaviorSubject<boolean>(false);
  isModalActive$ = this.modalActiveSource.asObservable();
  private rtnMessage: string;

  constructor() {}

  /**
   * modal initialize
   * @params isActive
   *
   */
  modalInit(isActive: boolean): void {
    this.modalActiveSource.next(isActive);
  }

  setRtnMessage(message: string): void {
    this.rtnMessage = message;
  }

  getRtnMessage(): string {
    return this.rtnMessage;
  }

  /**
   * prevent the default keyboard event
   * it is a helper method
   *
   * @param event - keyboard event
   */
  preventDefaultKeyboardEvent(event: KeyboardEvent): void {
    if (
      event.key === 'F1' ||
      event.key === 'F2' ||
      event.key === 'F3' ||
      event.key === 'F4' ||
      event.key === 'F5' ||
      event.key === 'F6' ||
      event.key === 'F7' ||
      event.key === 'F8' ||
      event.key === 'F9'
    ) {
      event.preventDefault();
    }
  }
}
