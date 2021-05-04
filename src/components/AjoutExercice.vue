<template>
    <div class="add-exercice">
        <div class="list" v-if="createEntrainement">
            <div class="text-home">
                Creer vos entrainements sans limite
            </div>
            <img src="../assets/Humaaans - 2 Characters.png" class="img-zone-preparation" alt="">
            <div class="form-floating mb-3" v-if="createEntrainement">
                <input type="text" @keyup="setTitle()" class="form-control" id="nameExo" placeholder="Nom de l'entrainement">
                <label for="nameExo">Nom de l'entrainement</label>
            </div>
            <div class="btn-gestion" >
                <div class="btn-list-exercice" @click="addExercice(); closeAddExercice()">
                    Terminer
                    <div class="space"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 12l5 5l10 -10" />
                    </svg>
                </div>
                <div class="btn-list-exercice" @click="addExercice(); completExercice()">
                    Commencer
                    <div class="space"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="zone-champ-exo">
            <router-view></router-view>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                createEntrainement: true,
                title: '',
                codeExo: '',
            }
        },
        methods: {
            setTitle() {
                this.title = document.querySelector('#nameExo').value
            },
            addExercice() {
                if(this.title != '') {
                    this.codeExo = makeid(12);
                    console.log(this.codeExo)

                    var data = {
                        titre: this.title,
                        codeExo: this.codeExo,
                        isComplet: false
                    }
                
                    this.$http.post('http://localhost:3000/listExercice', data)
                    .then(response => {
                            console.log(response.body);
                        }, response => {
                        console.error(response.body);
                    });

                } else {
                    var champExercice = document.querySelector("#nameExo")
                    champExercice.classList.add("is-invalid");
                }
            },
            completExercice() {
                if(this.title != '') {
                    this.createEntrainement = false;
                    this.$router.push({ name: 'addExo.pageExo', params: { codeExo: this.codeExo }});
                } else {
                    var champExercice = document.querySelector("#nameExo")
                    champExercice.classList.add("is-invalid");
                }
            },
            closeAddExercice(){
                if(this.title != '') {
                    this.$router.push({ name: 'listExo'})
                    window.location.reload();
                } else {
                    var champExercice = document.querySelector("#nameExo")
                    champExercice.classList.add("is-invalid");
                }
            }
        }
    }
    function makeid(length) {
        var result           = [];
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
        }
        return result.join('');
    }
</script>

<style scoped>
    .add-exercice{
        /* height: calc(100vh - 190px); */
        margin-top: 15px;
    }

    .text-home {
        margin-bottom: 70px;
        font-size: 30px;
        font-weight: 900;
        text-align: center;
        margin-top: 70px;
        text-transform: uppercase;
        color: #3699ff
    }

    .img-zone {
        height: auto;
        width: 40%;
        padding: 20px;
    }

    .img-zone-preparation {
        height: auto;
        padding: 20px;
        position: absolute;
        float: left;
        left: 0px;
        top: 130px;
        width: 100%;
        opacity: 0.2;
    }

    .add-exercice .list {
        background-color: white;
        height: 100%;
        border-radius: 5px;
        padding: 10px; 
    }

    .time-zone {
        display: flex;
        align-items: center;
    }

    .time-zone .ou {
        margin: 0 13px;
    }

    .btn-list-exercice {
        color: #7e8299;
        border-color: #f5f8fa;
        background-color: #f5f8fa;
        font-size: 16px;
        border-radius: .475rem;
        width: 130px;
        height: 40px;
        font-weight: 800!important;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
    }

    .btn-add-exercice {
        text-decoration: none;
        color: white;
    }

    .btn-back {
        padding: 15px 15px 15px 1px;  
        text-align: initial;
    }

    .btn-back .txt-back {
        text-decoration: none;
        color: grey;
    }

    .btn-gestion {
        /* margin-top: calc(100vh - 529px); */
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
    }

    .space{
        width: 5px;
    }
</style>