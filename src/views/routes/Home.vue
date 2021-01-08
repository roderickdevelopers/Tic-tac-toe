<template>
  <div class="home">
    <img
      alt="Tic Tac Toe logo"
      src="@/assets/tictactoe.png"
    >
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/structural/routes/home/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

