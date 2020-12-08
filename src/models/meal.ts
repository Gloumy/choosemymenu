export class MealDTO {
    public id = 0;
    public name = '';
    public imageUrl = '';
    public sourceUrl = '';
}

export class Meal extends MealDTO {
    constructor(dto?: MealDTO){
        super();
        Object.assign(this, dto || new MealDTO());
    }
}