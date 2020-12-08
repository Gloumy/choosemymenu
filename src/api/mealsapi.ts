import { Meal } from '@/models/Meal'
import axios from 'axios'

export default class MealApi {
  static async getMeals(): Promise<Meal[]> {

    const resp = await axios.get<Meal[]>('https://api.choosemymenu.cornet.dev/api/meals');

    return resp.data;
  }
}