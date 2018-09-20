import { trigger, transition, style, animate } from '@angular/animations';

export let fade = trigger('fade', [
    transition(':enter, :leave', [
        style({ opacity: 0 }),
        animate(2000)
    ])
])