<template>
<div id="app">
    <Header></Header>
    <Navbar></Navbar>
    <!--     <img src="./assets/logo.png"> -->
    <BrightBloc></BrightBloc>
    <Contact></Contact>
</div>
</template>

<script>
import Navbar from './components/Navbar'
import Header from './components/Header'
import BrightBloc from './components/BrightBloc'
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {
    Navbar, Header, BrightBloc, Contact
  }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
