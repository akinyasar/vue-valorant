<template>
  <div class="card card-container">
    <div class="card-header">{{ name }}</div>
    <div class="background-image">
      <img class="card-img-top" :src="image" alt="Card image cap" />
    </div>
    <div class="card-footer text-muted">
        <p v-if="shopData!=null"><b>Category:</b> {{shopData.categoryText}}</p>
        <p v-if="shopData!=null"><b>Cost:</b> {{shopData.cost}}$</p>
        <p v-if="shopData!=null"><b>Magazine Size:</b> {{weaponStats.magazineSize}}</p>
        <p v-if="shopData==null"><b>No information!</b></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "image", "shopData","weaponStats"],
};
</script>

<style scoped>
.background-image {
  background-image: url(https://media.valorant-api.com/playercards/9fb348bc-41a0-91ad-8a3e-818035c4e561/largeart.png);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}
.card-header {
  font-size: 23px;
  font-weight: bold;
  background-color: rgb(212, 211, 211);
}
.card-footer {
  font-size: 15px;
  font-weight: bold;
  background-color: rgb(212, 211, 211);
}
.card-container {
  border:10px solid rgb(185, 185, 185);
  margin-top: 40px;
  margin-left: 70px;
  width: 18rem;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
  border-radius: 10px;
  background-color: rgb(212, 211, 211);
}
.card-img-top {
  display:block;
  width: auto;
  height: 50px;
}
</style>
