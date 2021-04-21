<template>
    <div class="body-list">
        <div class="btn-list-exercice" @click="addExercice()">
            <!-- <router-link :to="{name: 'addExo'}" class="btn-add-exercice">AJOUTER UN EXERCICE</router-link> -->
            AJOUTER UN ENTRAINEMENT
        </div>
        <div class="list">
            <div v-for="exercice in exercices" :key="exercice.id">
                <div class="btn-select-exercice">
                    <div class="btn-params" @click="openParams(exercice.codeExo)">
                        <font-awesome-icon icon="align-justify" />
                    </div>
                    <div class="title" @click="selectExercice()">
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
            exercices: []
        }
    },
    methods: {
        selectExercice(codeExo) {
            this.$router.push({ name: 'exercice', params: { codeExo: codeExo } })
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
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .list-exercice{
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
        margin-bottom: 15px;
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
        background-color: #F5F5F5;
        height: 100%;
        border-radius: 5px;
        padding: 5px; 
    }

    .btn-select-exercice {
        background-color: #6FCF97;
        border-radius: 6px;
        padding: 10px;
        margin: 8px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        color: #FFFFFF;
    }

    .btn-select-exercice .title {
        display: flex;
        justify-content: space-between;
        margin-left: 32px;
    }

    .btn-params {
        position: absolute;
        z-index: 100;
    }

    .btn-edit {
    }
</style>
