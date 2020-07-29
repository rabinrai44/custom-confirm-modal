import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../shared/components/confirm-modal/confirm-modal.component';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {
  constructor(private modalService: NgbModal) {}

  async confirm(message: string): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.isConfirmFlag = true;

    return await modalRef.result;
  }

  async infoDialog(message: string): Promise<string> {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.message = message;

    return await modalRef.result;
  }
}
