import {
  Component,
  OnInit,
  HostListener,
  ChangeDetectorRef
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VerificationService } from 'src/app/services/verification.service';
import { HelperService } from 'src/app/services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logon-supervisor',
  templateUrl: './logon-supervisor.component.html',
  styleUrls: ['./logon-supervisor.component.scss']
})
export class LogonSupervisorComponent implements OnInit {
  form: FormGroup = new FormGroup({
    scanInput: new FormControl('', [Validators.required])
  });
  rtnMessage: string;
  isDialogActive: boolean;
  constructor(
    private verification: VerificationService,
    private helperService: HelperService,
    private router: Router,
    private ref: ChangeDetectorRef
  ) {
    // more details: https://blog.angular-university.io/how-does-angular-2-change-detection-really-work/
    this.ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 250);
  }

  ngOnInit(): void {
    console.log('Login init');
    this.helperService.isModalActive$.subscribe(
      (active) => {
        this.isDialogActive = active;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * processInput
   */
  processInput(): void {
    if (!this.form.valid) {
      return;
    }
    const submit = true;
    const clockNo = 4945;
    if (submit) {
      console.log('processInput: START');
      const isStillBeingPick = true;
      const error = false;
      if (error) {
        this.setRtnMessage('Password invalid');
        this.showDialog();
        return;
      }

      if (isStillBeingPick) {
        console.log('isStillBeingPick message exist');

        console.log('OPEN confirm window to get user input...');

        this.verification
          .confirm('Still being pick. Continue? ')
          .then((confirmed) => {
            console.log('User confirmed as result: ', confirmed);

            this.resetOpen(clockNo);

            setTimeout(() => {
              this.showDialog();
            }, 500);
          });
      }
    }
  }

  showDialog(): void {
    this.verification
      .infoDialog(this.getRtnMessage())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getRtnMessage(): string {
    return this.rtnMessage;
  }

  resetOpen(clockNo: number): void {
    this.setRtnMessage('Successfully pick reset for clock no: ' + clockNo);
  }

  setRtnMessage(msg: string): void {
    this.rtnMessage = msg;
  }

  goMenu(): void {
    console.log('Go back');
    this.router.navigate(['/']);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @HostListener('document:keyup', ['$event'])
  keyReleased(event: KeyboardEvent) {
    this.helperService.preventDefaultKeyboardEvent(event);

    if (this.isDialogActive) {
      return;
    }

    if (event.key === 'F1') {
      console.log('pressed F1 from logon component: ', event.key);
      this.goMenu();
    }

    if (event.key === 'Enter') {
      this.processInput();
    }
  }
}
