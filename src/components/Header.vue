<template>
  <div class="head">
    <nav class="header navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ball-american-football" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="10" y1="12" x2="12" y2="14" />
            <line x1="12" y1="10" x2="14" y2="12" />
            <path d="M8 21a5 5 0 0 0 -5 -5" />
            <path d="M16 3c-7.18 0 -13 5.82 -13 13a5 5 0 0 0 5 5c7.18 0 13 -5.82 13 -13a5 5 0 0 0 -5 -5" />
            <path d="M16 3a5 5 0 0 0 5 5" />
          </svg>
          SPORT TIME
        </a>
        <div class="home-menu" @click="back()">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
        </div>
      </div>
    </nav>
      <div class="bar-menu">
        <div class="btn-backs" @click="back()">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="9" y2="16" />
            <line x1="5" y1="12" x2="9" y2="8" />
          </svg>
          <div class="space"></div> Retour
        </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    back(){
      this.$router.push({ name: 'listExo' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    background-color: white;
    border-bottom: 1px solid #eff2f5;
    box-shadow: 0 10px 30px 0 rgb(82 63 105 / 5%);
  }

  .navbar-brand {
    font-size: 20px;
    font-weight: 700; 
  }
  .bar-menu {
    border-bottom: 1px solid #eff2f5;
    box-shadow: 0 10px 30px 0 rgb(82 63 105 / 5%);
    background-color: white;
    height: 60px;
    padding: 10px;
  }
  .btn-backs{
    color: #7e8299;
    border-color: #f5f8fa;
    background-color: #f5f8fa;
    font-size: 16px;
    border-radius: .475rem;
    width: 100px;
    height: 40px;
    font-weight: 800!important;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  .space{
    width: 5px;
  }
</style>
