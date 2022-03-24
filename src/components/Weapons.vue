<template>
  <div class="background">
    <Header />
    <div class="row">
      <WeaponCard
        v-for="weapon in weapons"
        :key="weapon.id"
        :name="weapon.displayName"
        :image="weapon.displayIcon"
        :shopData="weapon.shopData"
        :weaponStats="weapon.weaponStats"
      />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import WeaponCard from "./WeaponCard.vue";
import axios from "axios";

export default {
  name: "Weapons",
  components: { Header,WeaponCard},
  data() {
    return {
      weapons: [],
    };
  },
  methods: {
    async getWeapons() {
      axios
        .get("https://valorant-api.com/v1/weapons")
        .then((response) => {
          this.weapons = response.data.data;
          console.log(this.weapons.length);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    //user giriş yapmadıysa home saysfasına erişemez. otomatik olarak login sayfasına yönlendirilir
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Login" });
    }
    this.getWeapons();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.background {
  background-color:#0e1921;
  background-size: cover;
  background-image: none;
  height:100%;
}
.row {
   display: flex;
   flex-wrap: wrap;
}
</style>
