import {Meal} from './meal'

export class DayMeal  {
    public meal = new Meal();
    public locked = false;

    constructor(meal: Meal, locked = false){
        this.meal = meal;
        this.locked = locked;
    }
}