import { VuexModule, Module, Mutation, getModule, Action } from 'vuex-module-decorators'
import store from '@/store'
import { Meal } from '@/models/meal';
import MealsApi from '@/api/mealsapi'

export interface MealsState {
    meals: Array<Meal>;
}

@Module({ dynamic: true, store, name: 'meals' })
class Meals extends VuexModule implements MealsState {
    public meals = new Array<Meal>();

    @Mutation
    private toggleLockMeal(index: number) {
        this.meals[index].locked = !this.meals[index].locked;
    }

    @Mutation
    setMeals(meals: Meal[]) {
        this.meals = meals;
    }

    @Action({commit: 'setMeals'})
    async fetchAll() {
        const response: Response = await MealsApi.getMeals();

        return response;
    }
}

export const MealsModule = getModule(Meals);