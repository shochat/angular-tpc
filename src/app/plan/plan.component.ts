import {Component, Input, OnInit} from '@angular/core';
import {WeeklyPlan} from '../api/model/WeeklyPlan';
import {FormDetails} from '../api/model/form-details';
import {CreatePlanService} from '../services/CreatePlanService';

@Component({
  selector: 'app-plan',
  template: '<div>{{ this.plan | json }}</div>',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  @Input() formDetails: FormDetails;
  protected plan: WeeklyPlan[];
  // protected errorMessage: string;

  constructor(private createPlanService: CreatePlanService) {
  }

  ngOnInit() {
    this.createPlanService.createPlan().subscribe(
      plan => this.plan = plan
    );
  }
}
