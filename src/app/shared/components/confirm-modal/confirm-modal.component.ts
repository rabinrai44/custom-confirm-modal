import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  HostListener
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit, OnDestroy {
  title = '';
  @Input() message = '';
  @Input() isConfirmFlag = false;
  messageFrom = '';

  constructor(
    public activeModal: NgbActiveModal,
    private helperService: HelperService
  ) {}

  ngOnInit(): void {
    console.log('Modal window is init');
    if (this.isConfirmFlag) {
      this.title = 'Verification';
    } else {
      this.title = 'Information';
    }

    // modal initialize

    this.helperService.modalInit(true);
    this.messageFrom = this.helperService.getRtnMessage();
  }

  ngOnDestroy(): void {
    this.message = null;
    this.isConfirmFlag = false;
    console.log('Confirm Modal destroy...');
    // modal destroy
    this.helperService.modalInit(false);
  }

  decline(): void {
    this.activeModal.close(false);
  }
  accept(): void {
    this.activeModal.close(true);
  }

  dismiss(): void {
    this.activeModal.dismiss('done');
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @HostListener('document:keyup', ['$event'])
  keyReleased(event: KeyboardEvent) {
    this.helperService.preventDefaultKeyboardEvent(event);
    if (event.key === 'F4' && this.isConfirmFlag) {
      console.log('User input was: ', false);
      this.decline();
    } else if (event.key === 'F5') {
      console.log('User input was: ', true);
      this.accept();
    } else if (event.key === 'F4') {
      console.log('User input was: dismis dialog');
      this.dismiss();
    } else {
      return;
    }
  }
}
