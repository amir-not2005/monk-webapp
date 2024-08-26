import { makeAutoObservable } from "mobx";

export default class GoalStore {
  constructor() {
    this._allGoals = [];
    this._weekDayGoals = [];
    makeAutoObservable(this);
  }

  setAllGoals(allGoals) {
    this._allGoals = allGoals;
  }

  weekDayGoals(weekDayGoals) {
    this._weekDayGoals = weekDayGoals;
  }

  get allGoals() {
    return this._allGoals;
  }

  get weekDayGoals() {
    return this._weekDayGoals;
  }
}
