<template>
<Header  />
<div class="background-home">
  <h1 class="welcome" style="color:white">{{user.username}}, Welcome to Home Page</h1>
</div>
</template>
<script>
import Header from "./Header.vue";
export default {
  name: "Home",
  components: { Header },
  data(){
    return {
      user: [],
    }
  },
  mounted() {
    this.user= this.$store.getters['auth/getUser'];
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.background-home{ 
  height: 100vh;
  background-image: url(../assets/bg.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.welcome{
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  padding-top: 140px;
}
</style>
