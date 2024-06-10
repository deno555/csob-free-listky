<template>
  <div class="background">
    <router-link :to="{name: 'Password'}">
      <ion-button class="button">Prihlásiť</ion-button>
    </router-link>
  </div>
</template>

<script>
  import { IonButton } from '@ionic/vue';

  export default {
    components: { 
      IonButton
    },
  }
</script>

<style lang="sass">
body
  margin: 0

.background
  background: url('@/assets/csob-bg.png') no-repeat
  background-size: 100% 100%
  min-height: 100vh

.button
  position: relative
  top: 545px
  width: 97%
  height: 47px
  right: -5px
  --background: #3493c9
</style>