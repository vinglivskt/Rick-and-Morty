<template>
  <div class="character-block">
    <div class="character-block-image">
      <img :src="character.image" :alt="character.name">
    </div>
    <div class="character-block-info">
      <span>
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
  }

}
</script>

<style scoped>

</style>
