import {RaceDetails} from './race-details';
export class FormDetails {
    public raceDetails: RaceDetails;
    public age: number;
    public weight: number;
    public shapeLevel: number;
    public weeklyWorkoutDays: number;
    public racingHistory?: RaceDetails[];
    constructor(
      raceDetails: RaceDetails,
      age: number,
      weight: number,
      shapeLevel: number,
      weeklyWorkoutDays: number
    ) {
      this.raceDetails = raceDetails;
      this.age = age;
      this.weight = weight;
      this.shapeLevel = shapeLevel;
      this.weeklyWorkoutDays = weeklyWorkoutDays;
    }
}
