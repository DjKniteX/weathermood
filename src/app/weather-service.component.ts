import { Component, Input } from '@angular/core';
import { City } from './city';

@Component({
    selector: 'weather-service',
    templateUrl: './weather-service.component.html',
    styleUrls: ['../sass/weather-service.component.scss'],

})

export class WeatherServiceComponent {
    @Input() city: City;
}
