<template>
  <div class="background">
    <Header />
    <div class="row">
      <AgentCard
        v-for="agent in agents"
        :key="agent.id"
        :name="agent.displayName"
        :image="agent.fullPortrait"
        :description="agent.description"
      />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import AgentCard from "./AgentCard.vue";
import axios from "axios";

export default {
  name: "Agents",
  components: { Header, AgentCard },
  data() {
    return {
      agents: [],
    };
  },
  methods: {
    async getAgents() {
      axios
        .get("https://valorant-api.com/v1/agents")
        .then((response) => {
          this.agents = response.data.data;
          console.log(this.agents[0]);
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
    this.getAgents();
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
