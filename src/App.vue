<template>
  <div>
    <header>
      <div class="grid-container grid-container-padded">
        <ul class="grid-x grid-margin-x">
          <li class="small-4 cell">
            <h1>
              <a class="no_css h1_hidden" href="#body"
                >Choose my menu <img src="./assets/img/logo.png" alt="Logo"
              /></a>
            </h1>
          </li>
          <li class="small-8 cell intro_app">
            <p>
              Laisse l'application te proposer des plats originaux et verrouille
              chaque jour ce qui te plait. Ensuite, partage à tes proches, ces
              délicieuses recettes !
            </p>
          </li>
        </ul>
      </div>
    </header>
    <main id="main">
      <section v-if="isLoading">Loading ...</section>
      <section v-else>
        <div class="grid-container grid-container-padded">
          <div class="grid-x grid-margin-x">
            <div class="cell small-12">
              <div class="small-12 cell list_item" v-for="day in days" :key="day">
                <div class="grid-x grid-margin-x align-middle">
                  <div class="cell small-2">
                    <img src="@/assets/img/cadenas-open.svg" alt="cadenas" />
                  </div>
                  <div class="cell small-3 jour">{{ day }}</div>
                  <div class="cell small-5 titre_recette">Meal name</div>
                  <div
                    class="cell small-2 photo_recette"
                    :style="`background-image: url()`"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="mobile-app-icon-bar">
        <button><img src="./assets/img/picto-list.svg" alt="Picto" /></button>
        <button>
          <img
            class="choose"
            src="./assets/img/picto-melange.svg"
            alt="Picto"
          />
        </button>
        <button class="active">
          <img src="./assets/img/picto-share.svg" alt="Picto" />
        </button>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {MealsModule} from '@/store/modules/meals'

@Component({
  components: {
  },
})
export default class App extends Vue {
  private isLoading = false;

  private days: string[] = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  mounted(){
    MealsModule.fetchAll();
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/app";
</style>
