import {Component, OnInit} from '@angular/core';
import {FormDetails} from '../api/model/form-details';
import {RaceDetails} from '../api/model/race-details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  protected showRace = true;

  protected distances = [
    'Marathon(42.2)',
    'Half-Marathon(21.1',
    '10 KM'
  ];
  model = new FormDetails(
    new RaceDetails(new Date(), 'Marathon', '3:06'),
    47, 76, 'Advanced', 5);
  constructor() { }

  ngOnInit() {
  }

  public toggle(): void {
    this.showRace = !this.showRace;
    console.log(this.showRace);
  }
  public onSubmit() {
  };
  public translateSlider(): number {
    return 7;
  }
  get diagnostic() { return JSON.stringify(this.model.raceDetails); }
}
