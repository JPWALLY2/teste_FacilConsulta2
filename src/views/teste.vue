<template>
    <div id="app">
        <form action="" v-on:submit.prevent="checkForm">
            <input type="text" v-model="name" placeholder="Name">

            <input type="text" v-model="email" placeholder="Email">
            <button>Enviar</button>
        </form>

        <ul>
            <li v-for="error in errors" :key="error">{{error}}</li>
        </ul>
        
    </div>
</template>

<script>
export default {
    el: '#app',
     data(){
       return {  
        name: null,
        email: null,
        errors: [], 
        loading: false};
     },
    methods: {
        checkForm: function(){
            this.errors = [];

            if(!this.name){
                this.errors.push("Campo nome obrigatório")
            }
            if(!this.email){
                this.errors.push("Campo email obrigatório")
            }
        }
    },
}
</script>