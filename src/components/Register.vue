<template>
  <div class="register-container">
    <div class="centered-content">
      <div
        @click="signIn"
        class="btn btn-primary btn-lg">
        Sign In with Blockstack
      </div>
      <div class="sign-up">
        <div style="padding: 10px 0px">
          or
        </div>
        <a @click="signUp">
          create an blockstack id
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/services/store.service'

export default {
  name: 'Register',
  methods: {
    signIn: () => {
      return store.auth.signin()
    },
    signUp: () => {
      console.log('sign up')
    }
  }
}
</script>

<style>
.register-container {
  background-color: #E91E63;
  color: #fff;

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
.centered-content {
  padding: 3em;
  width: 400px;
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.sign-up {
  text-align: center;
  font-size: 0.9em;
}
</style>
