import {RaceDetails} from './race-details';
export class FormDetails {
    public raceDetails: RaceDetails;
    public age: number;
    public weight: number;
    public shapeLevel: number;
    public weeklyWorkoutDays: number;
    public racingHistory?: RaceDetails[];
  constructor() {}
}
