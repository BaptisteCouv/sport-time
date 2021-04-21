<template>
    <div class="add-exercice">
        <div class="btn-back">
            <router-link :to="{name: 'listExo'}" class="txt-back"><font-awesome-icon icon="chevron-left" /> Retour </router-link>
        </div>
        <div class="list">
            <img src="../assets/Humaaans - 2 Characters.png" class="img-zone-preparation" alt="">
            <div class="form-floating mb-3">
                <input type="text" @keyup="setTitle()" class="form-control" id="nameExo" placeholder="Nom de l'entrainement">
                <label for="nameExo">Nom de l'entrainement</label>
            </div>
            <!-- <div class="time-zone">
                <div class="form-floating">
                    <input type="text" class="form-control" id="repetition" placeholder="Repetition">
                    <label for="repetition">Repetition</label>
                </div>
                <div class="ou"> OU</div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="timer" placeholder="Temps">
                    <label for="timer">Temps</label>
                </div>
            </div> 
             <div class="custom-file">
                <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                <div class="invalid-feedback">Example invalid custom file feedback</div>
            </div> 
            <img src="../assets/Humaaans - Sitting.png" class="img-zone" alt="">
             <div class="recup">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="tempsRecup" placeholder="Temps de recuperation">
                    <label for="tempsRecup">Temps de recuperation</label>
                </div>
            </div>     -->
            <div class="zone-champ-exo">
                <router-view></router-view>
            </div>
            <div class="btn-gestion">
                <div class="btn-list-exercice" @click="addExercice(); closeAddExercice()">
                    <font-awesome-icon icon="chevron-left" />Terminer
                </div>
                <div class="btn-list-exercice" @click="addExercice(); completExercice()">
                    Continuer<font-awesome-icon icon="chevron-right" />
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
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
                    this.$router.push({ name: 'addExo.pageExo', params: { codeExo: this.codeExo }})
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

    .img-zone {
        height: auto;
        width: 40%;
        padding: 20px;
    }

    .img-zone-preparation {
        height: auto;
        width: 80%;
        padding: 20px;
    }

    .add-exercice .list {
        background-color: #F5F5F5;
        height: 100%;
        border-radius: 5px;
        padding: 5px; 
    }

    .time-zone {
        display: flex;
        align-items: center;
    }

    .time-zone .ou {
        margin: 0 13px;
    }

    .btn-list-exercice {
        background: linear-gradient(267.23deg, #00A3FF -42.94%, rgba(255, 255, 255, 0) 88.57%), #6FCF97;
        border-radius: 6px;
        padding: 15px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: #FFFFFF;
        width: 45%;
        display: flex;
        justify-content: inherit;
        align-items: center;
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
        justify-content: space-around;
    }
</style>