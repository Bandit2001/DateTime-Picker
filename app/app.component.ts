import { Component, LOCALE_ID, Inject, OnInit } from '@angular/core';
import { IntlService, CldrIntlService } from '@progress/kendo-angular-intl';
import '@progress/kendo-angular-intl/locales/en/all';
import '@progress/kendo-angular-intl/locales/de/all';

@Component({
  selector: 'my-app',
  template: `
        <div class="example-config">
            Gewählter Wert ist: {{value | kendoDate:'dd.MM.yyyy'}}
        </div>
        <div class="example-wrapper" style="min-height: 400px">
            <p>Datum auswählen:</p>
            <kendo-datepicker
                [format]="'dd.MM.yyyy'"
                [(value)]="value"
            ></kendo-datepicker>
            <p>(use Alt+↓ to open the calendar, ← and →  to navigate, ↑ to increment and ↓ to decrement the value)</p>
        </div>
    `,
  styles: [
    `
        kendo-datepicker {
            width: 200px;
        }
    `,
  ],
})
export class AppComponent {
  public value: Date = new Date(2022, 1, 11);

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    public intlService: IntlService
  ) {}

  ngOnInit() {
    (<CldrIntlService>this.intlService).localeId = 'de-DE';
  }
}
