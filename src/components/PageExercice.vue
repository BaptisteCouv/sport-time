<template>
    <div class="add-exercice">
        <div class="list">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="exerciceName" placeholder="Nom de l'exercice">
                <label for="exerciceName">Nom de l'exercice</label>
            </div>
            <div class="time-zone">
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
            <!-- <div class="custom-file">
                <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                <div class="invalid-feedback">Example invalid custom file feedback</div>
            </div>  -->
            <img src="../assets/Humaaans - Sitting.png" class="img-zone" alt="">
             <div class="recup">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="tempsRecup" placeholder="Temps de recuperation">
                    <label for="tempsRecup">Temps de recuperation</label>
                </div>
            </div>
            <div class="btn-gestion">
                <div class="btn-list-exercice" @click="initAllData($route.params.codeExo), postDataToServer()">
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
                codeExercice: '',
                titre: '',
                nbRepetition: '',
                nbTemps: '',
                images: '',
                tempsRepos: '',
                numExo: 0
            }
        },
        methods: {
            initAllData(codeEntrainement) {
                this.codeExercice = codeEntrainement;
                this.title = document.querySelector('#exerciceName').value
                this.nbRepetition = document.querySelector('#repetition').value
                this.nbTemps = document.querySelector('#timer').value
                // this.images = document.querySelector('#nameExo').value
                this.tempsRepos = document.querySelector('#tempsRecup').value
            }, 
            postDataToServer() {
                if(this.title != '') {
                    let data = {
                        codeExercice: this.codeExercice,
                        titre: this.title,
                        nbRepetition:this.nbRepetition,
                        nbTemps:this.nbTemps,
                        tempsRepos: this.tempsRepos
                    }
                    // console.log("etst de lq d "  + data)
                    this.$http.post('http://localhost:3000/addExercice', data)
                        .then(response => {
                            console.log(response.body);
                        }, response => {
                        console.error(response.body);
                    });
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
        /* height: 100%; */
        border-radius: 7px;
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