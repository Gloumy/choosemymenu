import { VuexModule, Module, Mutation, getModule, Action } from 'vuex-module-decorators'
import store from '@/store'
import MealsApi from '@/api/mealsapi'
import { DayMeal } from '@/models/dayMeal';
import { Meal } from '@/models/meal';

export interface MealsState {
    meals: Array<DayMeal>;
    excludedIds: Array<number>;
}

@Module({ dynamic: true, store, name: 'meals' })
class Meals extends VuexModule implements MealsState {
    public meals = new Array<DayMeal>();
    public excludedIds = new Array<number>();

    @Mutation
    public toggleLockMeal(index: number) {
        this.meals[index].locked = !this.meals[index].locked;
    }

    @Mutation
    setMeals(meals: DayMeal[]) {
        this.meals = meals;
    }

    @Mutation
    refreshMeals(meals: Meal[]){
        const mealsToRefresh = this.meals.filter((m) => !m.locked);
        console.log(mealsToRefresh);
        mealsToRefresh.forEach((m) => m.meal = meals.shift());
    }

    @Action({ commit: 'setMeals' })
    async fetchAll() {
        const meals = await MealsApi.getMeals();
        
        return meals.map((m) => new DayMeal(m));
    }

    @Action({commit: 'refreshMeals'})
    async refresh() {
        const limit = this.meals.filter((m) => !m.locked).length;
        this.meals.forEach((m) => this.excludedIds.push(m.meal.id));
        
        const excludedIdsString = this.excludedIds.join('&excludedIds=')
        
        const meals = MealsApi.getMeals(limit, excludedIdsString);

        return meals;
    }
}

export const MealsModule = getModule(Meals);