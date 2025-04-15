import { Component } from '@angular/core';
import { ServicesComponent } from '../../common/services/services.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';

@Component({
    selector: 'app-services-page',
    imports: [ServicesComponent, SubscribeComponent],
    templateUrl: './services-page.component.html',
    styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent {}