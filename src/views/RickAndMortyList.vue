<template>
  <div class="home">
    Rick and Morty
    <div class="characters-list">
      <character-block
          v-for="character in characters"
          :key="character.id"
          :character = "character"
      />

    </div>
    <paginate
        v-model="currentPage"
        :page-count="pages"
        :page-range="3"
        :margin-pages="2"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'">
    </paginate>
  </div>
</template>

<script>

import CharacterBlock from "../components/CharacterBlock";
import paginate from 'vuejs-paginate'


export default {
  name: 'rick-and-morty-list',
  components: {
    CharacterBlock,
    paginate},
 created() {
    this.$store.dispatch('fetchCharacters',this.currentPage);
 },
  data(){
    return{
      currentPage: 1,
    }
  },
  computed:{
    characters(){
      return this.$store.getters['getCharacterByPage'](this.currentPage);
    },
    firstCharacter(){
      return this.$store.getters['getCharacterById']({id:1, page:1});
    },
    pages(){
      return this.$store.state.pages;
    }
    },
  methods:{
    clickCallback(pageNum){
      console.log({pageNum})
    }
  }
}



</script>
