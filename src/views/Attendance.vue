<template>
    <div class="attendance">
        <div class="container col-10 col-lg-9">
            <router-link  to="/"><i class="fa fa-chevron-left" aria-hidden="true"></i></router-link>
        </div>
          <div class="body d-flex justify-content-center">
            <div id="whiteBackground" class="col-lg-9 col-12 shadow  row">
                <div class="container">
                    <div class="mx-lg-5 px-lg-2  py-lg-4">
                        <h1 class="d-flex mt-4 text-start">Sobre o atendimento</h1>
                        <h4 class="my-3 text-start">Detalhes do atendimento</h4>

                        <form @submit.prevent="addPro(pr)">
                            <div class="mb-3 l1 col-lg-6">
                                <label for="specialty" class="form-label">Especialidade principal*</label>
                                    <select name="specialty" class="form-select" v-model="pr.specialty" style=" border: 1px solid #483698;">
                                        <option value=""  selected>Selecione a especialidade</option>
                                        <option value="cardiologia">Cardiologia</option>
                                        <option value="dermatologia">Dermatologia</option>
                                        <option value="neurologia">Neurologia</option>
                                        <option value="oftalmologia">Oftalmologia</option>
                                        <option value="psiquiatria">Psiquiatria</option>
                                        <option value="urologia">Urologia</option>
                                    </select>
                                    <span v-for="errs in errorsS" :key="errs">{{errs}} <br></span>
                            </div>
                            
                            <div class="mb-3 l1 col-10 col-lg-4">
                                <label for="price" class="form-label float-start">Informe o preço da consulta*</label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class=" rs input-group-text">R$</span>
                                    </div>
                                <input type="number" v-model="pr.price" class="form-control price" placeholder="Valor" step="0.01">
                            </div>
                            <span v-for="errp in errorsP" :key="errp">{{errp}} <br></span>
                            </div>
                            <div class="mb-3 l1 col-lg-6">
                                <label for="paymentMethods" class="form-label mb-4">Formas de pagamento da consulta*</label>
                                <span v-for="errm in errorsM" :key="errm"><br>{{errm}} <br></span>
                                <div class="card mb-3">
                                    <div class="card-body">
                                        <input type="checkbox"  v-model="pr.money"  class="mx-5"  name="checkbox" id="checkbox">
                                        Em dinheiro
                                    </div>
                                </div>
                                <div class="card mb-3">
                                    <div class="card-body">
                                        <input type="checkbox"  v-model="pr.pix" class="mx-5"  name="checkbox" id="checkbox">
                                        Pix
                                    </div>
                                </div>
                                <div class="card mb-3">
                                    <div class="card-body">
                                        <input type="checkbox"  v-model="pr.card" class="mx-5 mb-3"  name="checkbox" id="checkbox">
                                        Cartão de Crédito
                                    </div>
                                    <div v-if="pr.card === true">
                                        <div class="container parcela">
                                            Parcelamento em
                                            <div>
                                                <input type="radio" v-model="pr.one"  class="mx-1 mt-3" id="radio" name="radio" >
                                                    1x, sem juros
                                            </div>
                                            <div>
                                                <input type="radio" v-model="pr.two" class="mx-1 mt-3" id="radio" name="radio" >
                                                    2x, sem juros
                                            </div>
                                            <div>
                                                <input type="radio" v-model="pr.tree" class="mx-1 mt-3" id="radio" name="radio" >
                                                    3x, sem juros
                                            </div>
                                        </div>
                                </div>
                                       
                                </div>
                                <span v-for="errpa in errorsPa" :key="errpa">{{errpa}} <br></span>
                            </div>

                            <div class="col-lg-6 mb-3">
                                <div>
                                    <div class="progress" style="width: 80%; height: 20px;">
                                    <div class="progress-bar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="2"></div>
                                    </div>
                                </div>
                                <div class="float-end" style="margin-top: -20px;">
                                    <h6>2 de 2</h6>
                                </div>
                                </div>
                            <!-- botão compartilhado -->
                            <buttonNext></buttonNext>
                        </form>
                        <!-- {{pro}} -->
                    </div>
                </div>
                
                <div class="offset-6 col-6 d-none d-lg-block" style=" margin-top: -490px; padding-left: 40px; ">
                    <img src="img/desktop-pagina-2.png" alt="" style="height: 310px;">
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
  color: #DC3545 !important;
}

i {
    text-decoration: none;
    color: #483698;
    font-size: 18px;
    position: absolute;
    margin-top: 30px;
}

h4{
    font-size: 26px;
}

.rs{
    background-color: #483698 !important;
    color: #FFFFFF !important;
    border-radius: 10px 0 0 10px !important;
    font-family: 'Open Sans', sans-serif;
}

.card{
    background-color: #F9F9F9;
    border: none;
    box-shadow: 0 3px 0 1px #B9B9B9;
    font-weight: 500;
    font-size: 15px;
    border-radius: 10px;
}

 #checkbox{
    margin-bottom: 10px;
    transform: scale(1.5);
}

.parcela{
    font-weight: 400;
    margin-left: 107px;
    font-size: 15px;
    margin-bottom: 20px;
}

#radio{
    transform: scale(1.5);
}



    @media only screen and (max-width: 576px)  {


        i:hover{
            transform: scale(0.9);
            transition: all 0.3s;
        }

         h1{
            font-size: 30px;
        }

         h5{
           font-size: 25px; 
        }


    }
</style>

<script>
import buttonNext from '../components/buttonNext.vue'
 export default{
      components:{
       buttonNext
     },
    data(){
       return {
         pr: {
           specialty: null,
           price: null,
            money: null,
            pix: null,
            card: null,
                one: null,
                two:null,
                tree: null
           },
         errorsS:[],
         errorsP:[],
         errorsM:[],
         errorsPa:[],
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
           this.errorsS = [];
           this.errorsP = [];
           this.errorsPa = [];
           this.errorsM = [];

            if(this.pr.specialty == null || this.pr.specialty == ''){
            this.errorsS.push('Especialidade é obrigatório')
          }
          if(this.pr.price == null || this.pr.price == ''){
            this.errorsP.push('Preço é obrigatório')
          }
          if(this.pr.price < 50.00 || this.pr.price > 350.00){
            this.errorsP.push('O valor deve ser entre 50,00 á 350,00 reais')
          }

          if(this.pr.money == null || this.pr.money == '' && 
            this.pr.pix == null || this.pr.pix == '' && 
            this.pr.card == null || this.pr.card == ''){
              this.errorsM.push('Forma de pagamento é obrigatório')
          }

          if(this.pr.money == true && this.pr.pix == true ||
             this.pr.money == true && this.pr.card == true ||
             this.pr.pix == true && this.pr.card == true){
            this.errorsM.push('Selecione apenas uma forma de pagamento')
          }

           if(this.pr.card == true){
               if(this.pr.one == null && this.pr.two == null && this.pr.tree == null){
                   this.errorsPa.push('Selecione uma forma de parcelamento')
               }
          }

           if( this.errorsS == 0 && this.errorsP == 0
           && this.errorsPa == 0 && this.errorsM == 0){
               try{
                   this.loading = true;
                   await this.$store.dispatch("addPr", pr)
               }finally{
                   this.loading = false
               }

           }
       }
     }
     }
     
</script>
