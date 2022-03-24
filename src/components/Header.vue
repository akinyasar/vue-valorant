<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark py-3">
      <a href="/" class="navbar-brand logo">
        <img src="../assets/logo.png" width="132.41" height="40"/>
      </a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item item">
          <router-link to="/" class="nav-link">
            <font-awesome-icon icon="home" /> Home
          </router-link>
        </li>
        <li class="nav-item item">
          <router-link to="/agents" class="nav-link">
            Agents
          </router-link>
        </li>
        <li class="nav-item item">
          <router-link to="/weapons" class="nav-link">
            Weapons
          </router-link>
        </li>
        <li class="nav-item item logout">
          <router-link to="/login" v-on:click="logout" class="nav-link">
            Logout
          </router-link>
        </li>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods:{
    logout(){
      localStorage.clear();
    }
  }
};
</script>

<style scoped>
.item{
  justify-content: center;
  text-align: center;
  margin-left:20px;
  font-size: 18px;
}
.item:hover {
  background-color: #343a40;
  border-radius: 10px;
}
.logo{
  margin-left: 220px;
  margin-right: 220px;
}

.logout{
  margin-left: 250px;
  font-size: 18px;
}
</style>