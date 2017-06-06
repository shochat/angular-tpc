import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {FormDetails} from '../api/model/form-details';
import {Observable} from 'rxjs/Observable';
import {WeeklyPlan} from '../api/model/WeeklyPlan';

@Injectable()
export class CreatePlanService {
  private serviceUrl = 'http://localhost:5000/create-plan';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  public plan: WeeklyPlan[];
  public formDetails: FormDetails;

  constructor(private http: Http) {}

  createPlan(): Observable<WeeklyPlan[]> {
    return this.http.post(this.serviceUrl, JSON.stringify(this.formDetails), this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    const body = res.json();
    return body || JSON.stringify(body);
  }
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
