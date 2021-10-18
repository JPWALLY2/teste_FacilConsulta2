<template>
    <div id="btnext">
        <div class="d-flex justify-content-start">
            <button class="btn col-12 col-lg-6 "><router-link to="/attendance">PRÓXIMO</router-link></button>
        </div>
    </div>
</template>

<style scoped>
a{
  text-decoration: none;
  color: #FFFFFF;
}

.btn{
    font-family: 'Comfortaa', cursive;
    background-color: #483698;
    font-size: 18px;
    padding: 3px 10px;
    border: none;
    border-radius: 25px;
}

.btn:hover{
    transform: scale(0.9);
    transition: all 0.3s;
    background-color: #483698;
}
</style>

<script>
export default {
    name: "btnext", 
}
// Vue.component('buttonNext', {
  
//   template: '<button class="btn btn-primary col-12 col-lg-6 "><router-link to="/attendance">PRÓXIMO</router-link></button>'
// //   template: '<button class="btn btn-primary col-12 col-lg-6 "><router-link to="/attendance">PRÓXIMO</router-link></button>'

// })
</script>