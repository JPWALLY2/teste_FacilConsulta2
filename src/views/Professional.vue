<template>
    <div id="professional">
        <div class=" d-flex justify-content-center">
        <div id="whiteBackground" class="col-lg-9 col-12 shadow  row">
        <div class="container">
          <div class="mx-lg-5 px-lg-2  py-lg-4">
          <h1 class="d-flex mt-4 text-start">Sobre o profissional</h1>
          <h5 class="my-3 text-start">Dados do profissional</h5>

          
          <form @submit.prevent='addPro(pr)'>
            <div class="mb-3 l1 col-lg-6">
              <label for="name" class="form-label float-start">Nome completo*</label>
              <input type="text" v-model="pr.name" class="form-control" placeholder="Digite o nome completo" minlength="3" maxlength="48">
            </div>
            <div class="mb-3 l1 col-10 col-lg-4">
              <label for="cpf" class="form-label float-start">CPF*</label>
              <input type="text" v-model="pr.cpf" class="form-control cpf" placeholder="Digite um CPF" >
            </div>
    
            <div class="mb-3 l1 col-10 col-lg-4">
              <label for="phoneNumber" class="form-label float-start">Número de celular*</label>
              <input type="text" v-model="pr.phoneNumber" class="form-control phoneNumber" placeholder="(00) 0 0000-0000" >
            </div>
    
            <div class="mb-5 l1 d-flex justify-content-center justify-content-lg-start">
              <div class="col-6 col-lg-3">
                <label for="state" class="form-label float-start">Estado*</label>
                  <select  v-model="pr.state"  class="form-select" style=" border: 1px solid #483698;">
                    <option value="" selected>Selecione</option>
                    <option value="pr">Paraná</option>
                    <option value="rs">Rio Grande do Sul</option>
                    <option value="sc">Santa Catarina</option>
                  </select>
              </div>
    
              &nbsp;&nbsp;
              
              <div class="col-6 col-lg-3">
                <label for="city" class="form-label float-start">Cidade*</label>
                  <select  v-model="pr.city" class="form-select" style=" border: 1px solid #483698;">
                    <option value="" selected>Selecione</option>

                    <div v-if="state === 'pr'">
                      <option value="londrina">Londrina</option>
                      <option value="maringa">Maringá</option>
                    </div>
                    <div v-else-if="state === 'rs'">
                      <option value="pelotas">Pelotas</option>
                      <option value="portoalegre">Porto Alegre</option>
                    </div>
                    <div v-else-if="state === 'sc'">
                      <option value="florianopolis">Florianópolis</option>
                      <option value="joinvile">Joinvile</option>
                    </div>
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
            <div class="d-flex justify-content-start">
              <button class="btn btn-primary col-12 col-lg-6 " >
                  <router-link to="/attendance">PRÓXIMO</router-link>
                </button>  
            </div>
          </form>
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

a{
  text-decoration: none;
  color: #FFFFFF;
}

.btn{
    color: #FFFFFF;
    background-color: #483698;
    font-size: 20px;
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

//  export default{
//      data(){
//        return { pro: [], pr: {}};
//      },
//       //função addPro
//        addPro(pr){
//          pr.id = Date.now();
//          this.pro.push(pr);

//        }
//      }
export default{
     name: "app", 
     data(){
       return { pr: {}, loading: false};
     },
     computed: {
       pro(){
         return this.$store.state.pro;
       }
     },
     methods:{
       //função addPro
       async addPr(pr){
         try{
           this.loading = true;
           await this.$store.dispatch('addPr', pr)
         }finally{
           this.loading = false

         }

       }
     },
     
   }
</script>