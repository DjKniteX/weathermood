import { Component, Input } from '@angular/cli';
import { City } from './app/city';

@Component({
    selector: 'weather-service',
    templateUrl: './app/weather-service/weather-service.component.html',

})

export class WeatherServiceComponent {
    @Input() city: City;
}
