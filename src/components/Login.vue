<template>
  <div class="col-md-12 background">
    <h1 class="title">Login Page</h1>
    <div class="card card-container ">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="form-group">
          <label for="email">Email</label>
          <Field name="email" type="text" class="form-control" />
          <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <Field name="password" type="password" class="form-control" />
          <ErrorMessage name="password" class="error-feedback" />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
            <router-link to="/sign-up">SignUp</router-link>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import axios from 'axios';
export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required("Email is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  methods: {
    async handleLogin(user) {
      this.loading = true;
      let result = await axios.get(
      `http://localhost:3000/users?email=${user.email}&password=${user.password}`  
      )
      console.log(result);
      if(result.status==200&& result.data.length>0){
        this.loading = false;
        localStorage.setItem("user-info",JSON.stringify(result.data[0]));
        this.$store.commit('auth/setUser',result.data[0]);
        this.$router.push({name:'Home'});
      }
      else{
        this.loading = false;
        this.message = "Invalid email or password!";
        setTimeout(() => {
          this.message = "";
        }, 2000);
      }
    },
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 20px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 10px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.error-feedback {
  color: red;
}
.background{
  height: 100vh;
  background-image: url(../assets/login_signup-bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.title{
  padding-top: 80px;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: white;
}

.btn{
  margin-top: 10px;
  margin-bottom: 5px;
}
.btn-block{
  padding-left: 60px;
  padding-right: 60px;
}
</style>
