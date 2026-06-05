import { Directive } from "@angular/core";

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})

export class SafeLinkDirective {
    constructor() {
        console.log('SafeLinkDirective is active!');
    }

    onConfirmLeavePage(event: MouseEvent) {
        const wantsToLeave =window.confirm('Do you really want to leave the page?');

        if (wantsToLeave) {
            return;
        }

        event.preventDefault();
    }
}