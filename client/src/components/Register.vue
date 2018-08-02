<template>
  <div>
    <h1>
      Register
    </h1>
    <input
    type="email"
    v-model="email"
    placeholder="email">
  </input>
  <br/>
  <input
  type="password"
  v-model="password"
  placeholder="password"
  >
</input>
<br/>
<button @click="register">Register thyself</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data() {
    return {
    email:"",
    password:""
    };
  },
  methods:{
    async register(){
    const response= await AuthenticationService.register({
        email:this.email,
        password:this.password
      });
      console.log(response.data);
    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
