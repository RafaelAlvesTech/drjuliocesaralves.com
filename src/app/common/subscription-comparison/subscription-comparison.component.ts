import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-subscription-comparison',
    imports: [NgClass],
    templateUrl: './subscription-comparison.component.html',
    styleUrls: ['./subscription-comparison.component.scss']
})
export class SubscriptionComparisonComponent {

    constructor(
        public router: Router
    ) { }

}