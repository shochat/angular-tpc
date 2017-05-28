import {Component, OnInit} from '@angular/core';
import {FormDetails} from '../api/model/form-details';
import {RaceDetails} from '../api/model/race-details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  protected showRace = false;

  protected distances = [
    {value: 1, viewValue: 'Marathon(42.2)'},
    {value: 2, viewValue: 'Half-Marathon(21.1'},
    {value: 3, viewValue: '10 KM'}
  ];
  protected ages = [
    {value: 1, viewValue: '< 20'},
    {value: 2, viewValue: '20-29'},
    {value: 3, viewValue: '30-39'},
    {value: 4, viewValue: '40-45'},
    {value: 5, viewValue: '46-50'},
    {value: 6, viewValue: '> 50'}
  ];
  protected shapeLevels = [
    {value: 1, viewValue: 'Bad'},
    {value: 2, viewValue: 'Beginner'},
    {value: 3, viewValue: 'Advanced'},
    {value: 4, viewValue: 'Lifetime athlete'},
    {value: 5, viewValue: 'Experienced'},
  ];
  protected weeklyWorkoutDays = [3, 4, 5, 6, 7];
  model = new FormDetails(
    new RaceDetails(new Date(), 1, '3:30'),
    47, 76, 3, 5);
  constructor() { }

  ngOnInit() {
  }

  public toggle(): void {
    this.showRace = !this.showRace;
    console.log(this.showRace);
  }
  public onSubmit() {
    alert('form submitted');
    console.log(JSON.stringify(this.model));
  };
  get diagnostic() { return JSON.stringify(this.model); }
}
