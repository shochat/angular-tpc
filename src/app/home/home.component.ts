import {Component, OnInit} from '@angular/core';
import {FormDetails} from '../api/model/form-details';
import {RaceDetails} from '../api/model/race-details';
import {CreatePlanService} from '../services/CreatePlanService';
import {WeeklyPlan} from '../api/model/WeeklyPlan';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  protected errorMessage: string;
  protected plan: WeeklyPlan[];
  protected showRace = true;

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
  protected formDetails: FormDetails = new FormDetails();

  constructor(private createPlanService: CreatePlanService) {
  }

  ngOnInit() {
  }

  public toggle(): void {
    this.showRace = !this.showRace;
  }
  public onSubmit(formDetails) {
    this.createPlan(formDetails);
    console.log(JSON.stringify(this.plan));
    console.log('finished');
  };

  createPlan(formDetails: FormDetails): void {
    this.createPlanService.createPlan(formDetails).subscribe(
      (plan: WeeklyPlan[]) => this.plan = plan,
      error => this.errorMessage = error
    );
  }
  get diagnostic() {
    return JSON.stringify(this.formDetails);
  } // TODO remove this
}
