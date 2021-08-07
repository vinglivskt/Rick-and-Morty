<template>
  <div class="character-block">
    <div class="character-block-image">
      <img :src="character.image" :alt="character.name">
    </div>
    <div class="character-block-info">
      <span @click="detaledinfo">
          {{character.name}}
      </span>
      <span>
          {{character.status}} - {{character.species}}
      </span>
      <span>
        Last know location: {{character.location.name}}
  </span>
  </div>


</div>
</template>

<script>
export default {
  name: "CharacterBlock",
  props:{
    character:{
      type: Object,
      required: true
    }
  },
  methods:{
    detaledinfo(){
      this.$router.push({name:'CharacterDetails', params: {id:this.character.id} })
    }
  }

}
</script>

<style scoped>

</style>
