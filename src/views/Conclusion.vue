<template>
    <div id="review">
        <div class=" d-flex justify-content-center">
            <div id="whiteBackground" class="col-lg-9 col-12 shadow  row">
                <div class="container">
                    <div class="mx-lg-5 px-lg-2 py-4">
                        <h1 class=" mt-4 text-start">Cadastro concluído!</h1>
                    </div>
                    <div>
                        <button class="btn my-4 py-1 py-lg-0 px-5 mx-2 mx-lg-5 text-uppercase"  >
                            <router-link to="/">Cadastrar novo profissional</router-link>
                        </button>  
                    </div>
                    <div>
                        <button class="btn btnList mx-lg-5  py-1 py-lg-0 mx-2  text-uppercase"  >
                            Listrar profissionais
                        </button>  
                    </div>
                </div>
                <div class="offset-lg-6 col-lg-6 d-flex justify-content-center">
                    <img src="img/desktop-pagina-4.jpg" alt="" style="height: 310px;">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.btn{
    font-family: 'Comfortaa', cursive;
    font-weight: 700;
    color: black;
    background-color: #FBDE40;
    border-radius: 15px;
}
    
.btn:hover{
    transform: scale(0.9);
    transition: all 0.3s;
}
.btnList{
    font-family: 'Comfortaa', cursive;
    background-color: #483698;
    color: #FFFFFF;
    padding: 0 85px;
}

a{
    text-decoration: none;
    color: black;
}

img{
    margin-top: -100px;
    padding-left: 40px;
}

@media only screen and (max-width: 576px)  {


    img{
       margin-top: 50px;
       margin-right: 20px;
       margin-bottom: 50px;
      
    }
}
</style>
