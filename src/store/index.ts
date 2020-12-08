import Vue from 'vue'
import Vuex from 'vuex'

import {IMealsState} from './modules/meals'

Vue.use(Vuex)

export interface IRootState {
  meals: IMealsState;
}

export default new Vuex.Store<IRootState>({});