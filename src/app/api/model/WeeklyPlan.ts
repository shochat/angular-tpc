import {Workout} from './Workout';
export class WeeklyPlan {
  public weeklyTotal: number;
  public weeksFromRace: number;
  public isRecovery: boolean;
  public isBLevelRace: boolean;
  public intensity: string;
  public workouts: Workout[];
}
