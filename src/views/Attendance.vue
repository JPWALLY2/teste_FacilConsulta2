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
                        <!-- <form > -->
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
                            </div>
                            <div class="mb-3 l1 col-10 col-lg-4">
                                <label for="price" class="form-label float-start">Informe o preço da consulta*</label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">R$</span>
                                    </div>
                                <input type="text" v-model="pr.price" class="form-control price" placeholder="Valor" required>
                            </div>
                            </div>
                            <div class="mb-3 l1 col-lg-6">
                                <label for="paymentMethods" class="form-label mb-4">Formas de pagamento da consulta*</label>
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

                                <div class="d-flex justify-content-start">
                                <button class="btn btnproximo col-12 col-lg-6 mb-5">
                                    <router-link to="/review">PRÓXIMO</router-link>
                                    </button>
                                </div>
                            
                        </form>
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

span{
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

.btnproximo{
    background-color: #483698;
    font-size: 20px;
    padding: 3px 10px;
    border: none;
    border-radius: 25px;
}

.btnproximo:hover{
    transform: scale(0.9);
    transition: all 0.3s;
}

a {
    text-decoration: none;
    color: #FFFFFF;
}

 a:hover{
    color: #FFFFFF;
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
 export default{
     data(){
       return { pro: [], pr: {}};
     },
      //função addPro
       addPro(pr){
         pr.id = Date.now();
         this.pro.push(pr);

       }
     }
     
</script>
