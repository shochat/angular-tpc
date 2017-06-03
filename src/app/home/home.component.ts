import {Component, OnInit} from '@angular/core';
import {FormDetails} from '../api/model/form-details';
import {RaceDetails} from '../api/model/race-details';
import {CreatePlanService} from '../services/CreatePlanService';
import {DatePipe} from '@angular/common';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {WeeklyPlan} from '../api/model/WeeklyPlan';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  protected formDetails: FormDetails;
  protected time: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
  protected errorMessage: string;
  protected plan: WeeklyPlan[] = [];
  protected showRace = true;

  protected distances = [
    {value: 'MARATHON', viewValue: 'Marathon(42.2)'},
    {value: 'HALF_MARATHON', viewValue: 'Half-Marathon(21.1'},
    {value: 'KM_10', viewValue: '10 KM'}
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

  constructor(private createPlanService: CreatePlanService,
              private datepipe: DatePipe) {
    this.formDetails = new FormDetails(new RaceDetails(), 0, 0, 0, 0);
  }

  ngOnInit() {
  }

  public toggle(): void {
    this.showRace = !this.showRace;
  }
  public onSubmit() {
    this.formDetails.raceDetails.raceDate = this.convertDateToString(this.formDetails.raceDetails.raceDate);
    this.formDetails.raceDetails.targetTime = this.convertNgbTimeObjectToString(this.time);

    this.createPlan(this.formDetails);
    console.log(JSON.stringify(JSON.stringify(this.plan)));
    console.log('finished');
  };

  private convertNgbTimeObjectToString(timeObject: NgbTimeStruct): string {
    return timeObject.hour + ':' + timeObject.minute + ':' + timeObject.second;
  }

  private convertDateToString(date: Object): string {
    return this.datepipe.transform(date, 'dd-MM-yyyy');
  }

  createPlan(formDetails: FormDetails): void {
    this.createPlanService.createPlan(formDetails).subscribe(
      (plan: WeeklyPlan[]) => this.plan = plan,
      error => this.errorMessage = error
    );
  }
}
