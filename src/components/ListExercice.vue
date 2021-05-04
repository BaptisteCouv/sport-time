<template>
    <div class="body-list">
        <div class="btn-list-exercice" @click="addExercice()">
            <!-- <router-link :to="{name: 'addExo'}" class="btn-add-exercice">AJOUTER UN EXERCICE</router-link> -->
            Entrainement 
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid-add" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><path d="M14 17h6m-3 -3v6" /></svg>
        </div>
        <div class="list">
            <div class="text-info">
                Liste des entrainements ...
            </div>
            <div v-for="exercice in exercices" :key="exercice.id">
                <div class="btn-select-exercice">
                    <div class="btn-params" @click="openParams(exercice.codeExo)">
                        <font-awesome-icon icon="align-justify" />
                    </div>
                    <div class="title" @click="selectExercice(exercice.codeExo)">
                        <div class="txt">
                            {{ exercice.titre }}    
                        </div>
                        <div class="btn-edit" @click="openParams()" v-if="!exercice.isComplet" title="Exercice vide !">
                            <font-awesome-icon icon="exclamation-triangle" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            exercices: [],
            listEmpty: 'a'
        }
    },
    methods: {
        selectExercice(codeExos) {
            console.log('code exo : ', codeExos)
            this.$router.push({ name: 'exercice', params: { codeExo: codeExos } })
        },
        addExercice() {
            this.$router.push({ name: 'addExo'});
        },
        openParams() {
            window.alert('params');
        }
    },
    mounted () {
        this.$http.get('http://localhost:3000/listExercice').then(response => {
            // success callback
            this.exercices = response.body;
        }, response => {
            // error callback
            console.log('erreur', response)
        });
        console.log(this.listEmpty)
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .icon-tabler.icon-tabler-layout-grid-add {
        float: right
    }

    .btn-list-exercice {
        background: #0095e8;
        border-radius: 6px;
        padding: 15px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: #FFFFFF;
        margin-bottom: 15px;
    }

    .title .txt {
        font-weight: 500;
        font-size: 19px;
    } 

    .btn-add-exercice {
        text-decoration: none;
        color: white;
    }

    .body-list{
        height: calc(100vh - 190px);
        margin-top: 15px;
    }

    .body-list .list {
        background-color: white;
        border-radius: 7px;
        padding: 5px; 
    }

    .btn-select-exercice {
        color: #009ef7;
        border-color: #ecf8ff;
        background-color: #ecf8ff;
        border-radius: 6px;
        padding: 10px;
        margin: 8px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
    }

    .btn-select-exercice .title {
        display: flex;
        justify-content: space-between;
        margin-left: 32px;
    }

    .btn-params {
        position: absolute;
        z-index: 100;
        margin-top: 2px;
    }
</style>
