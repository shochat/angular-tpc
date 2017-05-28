import {RaceDetails} from './race-details';
export class FormDetails {
  constructor(
    public raceDetails: RaceDetails,
    public age: number,
    public wieght: number,
    public shapeLevel: string,
    public weeklyWorkoutDays: number,
    public racingHistory?: RaceDetails[]
  ) {}
}
