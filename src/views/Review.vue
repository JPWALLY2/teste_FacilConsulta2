<template>
    <div id="review">
        <div class="container col-10 col-lg-9">
            <router-link  to="/attendance"><i class="fa fa-chevron-left" aria-hidden="true"></i></router-link>
        </div>
        <div class=" d-flex justify-content-center">
            <div id="whiteBackground" class="col-lg-9 col-12 shadow  row">
                <div class="container">
                    <div class="mx-lg-5 px-lg-2 py-4">
                        <h1 class=" mt-4 text-start">Revisão do cadastro</h1>

                        <div class="cardReview pt-4">
                            <p class="text-start p">Nome completo</p>
                            <p class="text-start response">
                                {{pro}}
                            </p>
                            <!-- <p class="text-start response">Fabrício Rodrigues de Oliveira</p> -->
                        </div>
                        <div class="cardReview pt-3">
                            <p class="text-start p">CPF</p>
                            <p class="text-start response">485.653.700-69</p>
                        </div>
                        <div class="cardReview pt-3">
                            <p class="text-start p">Número de celular ou telefone</p>
                            <p class="text-start response">(53) 98756-3654</p>
                        </div>
                        <div class="cardReview pt-3">
                            <p class="text-start p">Estado/Cidade</p>
                            <p class="text-start response">Rio Grande do Sul - Pelotas</p>
                        </div>
                        <div class="cardReview pt-3">
                            <p class="text-start p">Especialidade principal</p>
                            <p class="text-start response">Cardiologia</p>
                        </div>
                        <div class="cardReview pt-3">
                            <p class="text-start p">Preço da consulta</p>
                            <p class="text-start response">R$ 200,00</p>
                        </div>
                        <div class="cardReview pt-3">
                            <p class="text-start p">Forma de pagamento da consulta</p>
                            <p class="text-start response">Cartão de crédito - Parcelamento em 2x sem juros</p>
                        </div>
                        <form @submit.prevent="addPr(pr)">
                            <div>
                                <button class="btn my-4 col-lg-5 col-12 py-1 py-lg-0 px-5 mx-lg-2 text-uppercase"  >
                                    <router-link to="/conclusion">
                                        Cadastrar Profissional
                                    </router-link>
                                </button>  
                            </div>
                        </form>
                        <div>
                            <a href="" class="a mb-4 col-lg-5 d-flex justify-content-center" >
                                <router-link to="/" class="edit">Editar cadastro</router-link>
                            </a>  
                        </div>
                    </div>
                </div>
                 <div class="offset-6 col-6 d-none d-lg-block" style="margin-top: -520px; padding-left: 40px;">
                    <img src="img/desktop-pagina-3.png" alt="" style="height: 310px;">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
i {
    text-decoration: none;
    color: #483698;
    font-size: 18px;
    position: absolute;
    margin-top: 30px;
}

.cardReview{
    line-height: 10px;
    font-size: 15px;
}

.p{
    font-weight: 700;
}

.response{
    font-weight: 400;
}

#review .btn{
    background-color: #FBDE40;
    border-radius: 15px;
    color: black;
}

.btn:hover{
    background-color: #FBDE40;
    transform: scale(0.9);
    transition: all 0.3s;
}

a{
    text-decoration: none;
    color: black;
}

.edit{
    color: #483698;
    font-weight: 700;
    font-family: 'Comfortaa', cursive;
}
    
.a:hover{
    color: #483698;
    transform: scale(0.9);
    transition: all 0.3s;
}  

  @media only screen and (max-width: 576px)  {

        i:hover{
            transform: scale(0.9);
            transition: all 0.3s;
        }
  }
</style>

<script>

//  export default{
//      name: "app", 
//      data(){
//        return { pr: {}, loading: false};
//      },
//      computed: {
//        pro(){
//          return this.$store.state.pro;
//        }
//      },
//      methods:{
//        //função addPro
//        async addPr(pr){
//          try{
//            this.loading = true;
//            await this.$store.dispatch('addPr', pr)
//          }finally{
//            this.loading = false

//          }

//        }
//      },
     
//    }

import Pro from '@/components/professional';

export default {
    components: {Pro},
    computed: {
       pro(){
         return this.$store.state.pro;
       }
     }
    
    
}
</script>