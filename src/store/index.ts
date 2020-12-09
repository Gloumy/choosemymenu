import Vue from 'vue'
import Vuex from 'vuex'

import {MealsState} from './modules/meals'

Vue.use(Vuex)

export interface RootState {
  meals: MealsState;
}

export default new Vuex.Store<RootState>({});