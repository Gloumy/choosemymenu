import { Meal, MealDTO } from '@/models/meal'
import axios from 'axios'

export default class MealApi {
  static async getMeals(limit = 7, excludedIds = ""): Promise<Meal[]> {
    const excludedIdsQuery = excludedIds ? `&excludedIds=${excludedIds}` : '';
    const resp = await axios.get<MealDTO[]>(`https://api.choosemymenu.cornet.dev/api/meals?count=${limit}${excludedIdsQuery}`);
    return resp.data.map(m => new Meal(m));
  }
}