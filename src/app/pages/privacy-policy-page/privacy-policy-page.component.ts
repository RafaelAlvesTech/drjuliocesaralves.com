import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';

@Component({
    selector: 'app-privacy-policy-page',
    imports: [RouterLink, SubscribeComponent],
    templateUrl: './privacy-policy-page.component.html',
    styleUrls: ['./privacy-policy-page.component.scss']
})
export class PrivacyPolicyPageComponent {}