<template>
    <div>
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card" @click="startTime()">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="media-body text-left">
                  <h3 class="primary">278</h3>
                  <span>New Posts</span>
                </div>
                <div class="align-self-center">
                  <!-- <i class="icon-book-open "></i> -->
                    <font-awesome-icon icon="running" class="icon-list-exercice" />
                </div>
              </div>
              <div id="basicUsage">{{ timerSecond }} secondes</div>
              <div class="progress mt-1 mb-0" style="height: 7px;">
                <div id="progressBarTimer" class="progress-bar bg-green" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
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
                timerSecond : 90,
                timerMinutes : 0
            }
        },
        methods: {
            startTime() {
                let idTimer = document.querySelector("#basicUsage");
                let intTimer = parseInt(idTimer.innerHTML);
                setInterval(() => {
                    this.timerSecond = intTimer++
                    document.querySelector("#progressBarTimer").style.width = this.timerSecond  + "%"
                }, 1000);
            }
        }
    }
</script>

<style>
    .d-flex {
        justify-content: space-between
    }

    .align-self-center {
        color: #6FCF97;
        font-size: 39px;
    }

    .bg-green {
        background-color: #6FCF97;
    }

    .btn-back {
        padding: 15px 15px 15px 1px;  
        text-align: initial;
    }

    .btn-back .txt-back {
        text-decoration: none;
        color: grey;
    }
</style>