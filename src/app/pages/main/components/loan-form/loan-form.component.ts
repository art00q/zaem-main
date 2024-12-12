import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { InputData } from '../../../../commons/interfaces/input.interface';
import { FORM_INFO } from '../../commons/const/form-info.const';
import { interval, Subject, takeUntil } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-loan-form',
  standalone: false,
  
  templateUrl: './loan-form.component.html',
  styleUrl: './loan-form.component.scss'
})
export class LoanFormComponent implements OnInit, OnDestroy {
  @Input() isHorizontal!: boolean;

  public inputData: InputData = {
    placeholder: '+7 ( _ _ _ ) _ _ _ -_ _ - _ _',
    type: 'tel',
    name: 'input',
    required: false,
  }

  public banksInfo = FORM_INFO;
  public currentInfo!: {
    text: string | SafeHtml;
    status: string;
  };
  public isShowing: boolean = true;

  private _unsubscribe$ = new Subject();

  constructor(
    private readonly sanitizer: DomSanitizer,
  ) {
    this.currentInfo = this.banksInfo[0];
  }

  public ngOnInit(): void {
    this.banksInfo = this.banksInfo.map(bankInfo => {
      return {
        text: this.sanitizer.bypassSecurityTrustHtml(bankInfo.text as string),
        status: bankInfo.status,
      }
    })

    interval(3000)
      .pipe(
        takeUntil(this._unsubscribe$)
      ).subscribe((index) => {
        this.updateStatus(index);
      });
  }

  private updateStatus(index: number): void {
    const currentIndex = index % this.banksInfo.length;
    const prevIndex = currentIndex === 0 ? this.banksInfo.length - 1 : currentIndex - 1;

    this.banksInfo.forEach((info, i) => {
      switch (i) {
        case currentIndex:
          info.status = 'active';
          break
        case prevIndex:
          info.status = 'prev';
          break
        default:
          info.status = '';
      }  
    });
  }

  public ngOnDestroy(): void {
    this._unsubscribe$.next(null);
    this._unsubscribe$.complete();
  }
}
