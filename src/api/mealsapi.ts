import { Meal, MealDTO } from '@/models/meal'
import axios from 'axios'

export default class MealApi {
  static async getMeals(): Promise<Meal[]> {

    const resp = await axios.get<MealDTO[]>('https://api.choosemymenu.cornet.dev/api/meals');
    return resp.data.map(m => new Meal(m));
  }
}