import { VuexModule, Module, Mutation, getModule, Action } from 'vuex-module-decorators'
import store from '@/store'
import MealsApi from '@/api/mealsapi'
import { DayMeal } from '@/models/dayMeal';

export interface MealsState {
    meals: Array<DayMeal>;
}

@Module({ dynamic: true, store, name: 'meals' })
class Meals extends VuexModule implements MealsState {
    public meals = new Array<DayMeal>();

    @Mutation
    public toggleLockMeal(index: number) {
        this.meals[index].locked = !this.meals[index].locked;
    }

    @Mutation
    setMeals(meals: DayMeal[]) {
        this.meals = meals;
    }

    @Action({ commit: 'setMeals' })
    async fetchAll() {
        const meals = await MealsApi.getMeals();
        
        return meals.map((m) => new DayMeal(m));
    }
}

export const MealsModule = getModule(Meals);