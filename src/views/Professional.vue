<template>
    <div id="professional">
        <div class=" d-flex justify-content-center">
        <div id="whiteBackground" class="col-lg-9 col-12 shadow  row">
        <div class="container">
          <div class="mx-lg-5 px-lg-2  py-lg-4">
          <h1 class="d-flex mt-4 text-start">Sobre o profissional</h1>
          <h5 class="my-3 text-start">Dados do profissional</h5>

          
          <form @submit.prevent='addPro(pr)'>
          <!-- <form> -->
            <div class="mb-3 l1 col-lg-6">
              <label for="name" class="form-label float-start">Nome completo*</label>
                <input type="text" v-model="pr.name" class="form-control" placeholder="Digite o nome completo">    
                  <span v-for="err in errors" :key="err">{{err}} <br></span>
            </div>
            <div class="mb-3 l1 col-10 col-lg-4">
              <label for="cpf" class="form-label float-start">CPF*</label>
              <input type="text" v-model="pr.cpf" class="form-control cpf" placeholder="Digite um CPF" >
            </div>
    
            <div class="mb-3 l1 col-10 col-lg-4">
              <label for="phoneNumber" class="form-label float-start">Número de celular*</label>
              <input type="text" v-model="pr.phoneNumber" class="form-control phoneNumber" placeholder="(00) 00000-0000" >
            </div>
    
            <div class="mb-5 l1 d-flex justify-content-center justify-content-lg-start">
              <div class="col-6 col-lg-3">
                <label for="state" class="form-label float-start">Estado*</label>
                  <select  v-model="pr.state"  class="form-select" style=" border: 1px solid #483698;">
                    <option value="" selected disabled>Selecione</option>
                    <option value="pr">Paraná</option>
                    <option value="rs">Rio Grande do Sul</option>
                    <option value="sc">Santa Catarina</option>
                  </select>
              </div>
    
              &nbsp;&nbsp;
              
              <div class="col-6 col-lg-3">
                <label for="city" class="form-label float-start">Cidade*</label>
                  <select  v-model="pr.city" class="form-select" style=" border: 1px solid #483698;">
                    <option value="" selected disabled>Selecione</option>
                      <option v-if="pr.state === 'pr'" value="londrina">Londrina</option>
                      <option v-if="pr.state === 'pr'" value="maringa">Maringá</option>
                      <option v-if="pr.state === 'rs'" value="pelotas">Pelotas</option>
                      <option v-if="pr.state === 'rs'" value="portoalegre">Porto Alegre</option>
                      <option v-if="pr.state === 'sc'" value="florianopolis">Florianópolis</option>
                      <option v-if="pr.state === 'sc'" value="joinvile">Joinvile</option>
                  </select>
              </div>
            </div>
            <div class="col-lg-6 mb-3">
              <div>
                <div class="progress" style="width: 80%; height: 20px;">
                  <div class="progress-bar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="2"></div>
                </div>
              </div>
              <div class="float-end" style="margin-top: -20px;">
                <h6>1 de 2</h6>
              </div>
            </div>

                 <div v-if="errors.length == 0">
                   <!-- botão compartilhado -->
                    <buttonNext></buttonNext>
                 </div>
              <div v-else >
                  <div class="d-flex justify-content-start">
                    <button class="btn col-12 col-lg-6 "><router-link to="">PRÓXIMO</router-link></button>
                 </div>
              </div>
          </form>
          {{pro}}
          </div>
        </div>
      <div class="offset-6 col-6 d-none d-lg-block" style="margin-top: -490px; padding-left: 40px;">
        <img src="img/desktop-pagina-1.png" alt="" style="height: 310px;">
      </div>
    </div>
  </div>
    </div>
</template>

<style lang="css" scoped>

.errorInput input{
  border-color: #DC3545;
}
span{
  color: #DC3545;
}

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

@media only screen and (max-width: 576px)  {


    h1{
        font-size: 34px;
    }

    h5{
        font-size: 27px;
    }

    .btn{
       margin-bottom: 39px;
    }

}
    
</style>

<script>

import buttonNext from '../components/buttonNext.vue'

export default{
     name: "app", 
     components:{
       buttonNext
     },
     data(){
       return {
         pr: {
           name: null,
           cpf: null,
           phoneNumber: null,
           state: null,
           city: null
           },
         errors: [],
         loading: false
         };
     },
     computed: {
       pro(){
         return this.$store.state.pro;
       }
     },
     methods:{
        //função addPro
          async addPro(pr){
            this.errors = [];

          if(this.pr.name == null || this.pr.name == ''){
              this.errors.push('Nome é obrigatório')
          }

          if(this.pr.cpf == null || this.pr.cpf == ''){
            this.errors.push('Cpf é obrigatório')
          }

          if(this.pr.phoneNumber == null || this.pr.phoneNumber == ''){
            this.errors.push('Número de celular é obrigatório')
          }
          if( !this.validPhone(this.pr.phoneNumber)){
            this.errors.push('Digite um número de celular válido ')
          }

          if(this.pr.state == null || this.pr.state == ''){
            this.errors.push('Estado é obrigatório')
          }

          if(this.pr.city == null || this.pr.city == ''){
            this.errors.push('Cidade é obrigatório')
          }

          if(this.pr.name.length < 3 || this.pr.name.length > 48) {
            this.errors.push('O Nome deve possuir entre 3 e 48 caracteres ');
          }

          if( !this.validCPF(this.pr.cpf)){
            this.errors.push('Digite um cpf válido')
          }

          if( this.errors == 0){
             try{
                  this.loading = true;
                  await this.$store.dispatch("addPr", pr)
              }finally{
                  this.loading = false
              }
          }

          // e.preventDefault();


       },

        validPhone: function (phoneNumber){
        var regex = new RegExp(/^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{5}[-\s\.]?[0-9]{4,6}$/im);
        return regex.test(phoneNumber)
       },

       validCPF: function (cpf) {	
        cpf = cpf.replace(/[^\d]+/g,'');	
        if(cpf == '')
          return false;	
          
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length != 11 || 
          cpf == "00000000000" || 
          cpf == "11111111111" || 
          cpf == "22222222222" || 
          cpf == "33333333333" || 
          cpf == "44444444444" || 
          cpf == "55555555555" || 
          cpf == "66666666666" || 
          cpf == "77777777777" || 
          cpf == "88888888888" || 
          cpf == "99999999999")
            return false;

        var add = 0;	
        for (var i=0; i < 9; i ++)		
          add += parseInt(cpf.charAt(i)) * (10 - i);	
          var rev = 11 - (add % 11);	
          if (rev == 10 || rev == 11)		
            rev = 0;	
          if (rev != parseInt(cpf.charAt(9)))		
            return false;		

        var add = 0;	
        for (var i = 0; i < 10; i ++)		
          add += parseInt(cpf.charAt(i)) * (11 - i);	
        var rev = 11 - (add % 11);	
        if (rev == 10 || rev == 11)	
        rev = 0;	
      if (rev != parseInt(cpf.charAt(10)))
		    return false;		
	      return true;   
      },
             
            },

    
     }
     
   
</script>