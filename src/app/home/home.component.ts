import {Component, OnInit} from '@angular/core';
import {FormDetails} from '../api/model/form-details';
import {RaceDetails} from '../api/model/race-details';
import {CreatePlanService} from '../services/CreatePlanService';
import {WeeklyPlan} from '../api/model/WeeklyPlan';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CreatePlanService]
})
export class HomeComponent implements OnInit {
  protected errorMessage: string;
  protected plan: WeeklyPlan[];
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
  formDetails = new FormDetails(new RaceDetails(new Date(), 1, '3:30'), 47, 76, 3, 5);
  constructor(private createPlanService: CreatePlanService) { }

  ngOnInit() {
    this.initCreatePlanService();
  }

  initCreatePlanService() {
    this.createPlanService.createPlan(this.formDetails)
      .subscribe(
        plan => this.plan = plan, // Check this assignment
        error => this.errorMessage = <any>error);
  }

  public toggle(): void {
    this.showRace = !this.showRace;
    console.log(this.showRace);
  }
  public onSubmit() {
    const plan = this.createPlanService.createPlan(this.formDetails);
  };
  get diagnostic() { return JSON.stringify(this.formDetails); }
}
