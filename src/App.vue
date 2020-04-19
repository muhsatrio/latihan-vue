<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animation</h1>
                <hr>
                <select v-model="animationType" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br>
                <button class="btn btn-info" @click="show = !show">Click This</button>
                <hr>
                <transition :name="animationType">
                    <div class="alert alert-info" v-show="show">Halo halo halo halo halo</div>
                </transition>
                <transition :name="animationType" type="animation">
                    <div class="alert alert-info" v-if="show">Halo halo halo halo halo</div>
                </transition>
                <transition
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                    appear
                >
                    <div class="alert alert-info" v-show="show">Halo halo halo halo halo</div>
                </transition>
                <transition :name="animationType" type="animation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">Halo halo halo halo halo</div>
                    <div class="alert alert-warning" v-else key="warning">Halo halo halo halo halo</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load/Remove Element</button>
                <br>
                <br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false"
                >
                    <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
                </transition>
                <hr>
                <button 
                    class="btn btn-primary"
                    @click="selectedComponent=== 'DangerAlert' ? selectedComponent = 'SuccessAlert' : selectedComponent = 'DangerAlert'"
                >Toggle Component</button>
                <br><br>
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <button class="btn btn-primary"
                    @click="addItem">
                    Add Item
                </button>
                <ul class="list-group">
                    <transition-group name="slide">
                        <li class="list-group-item"
                            :key="i" 
                            v-for="(number, i) in numbers"
                            @click="removeItem(i)"
                            style="cursor: pointer;">
                            {{ number }}
                        </li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert';
    import SuccessAlert from './SuccessAlert';
    export default {
        data() {
            return {
                show: false,
                load: true,
                animationType: "fade",
                elementWidth: 100,
                selectedComponent: 'DangerAlert',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        components: {
            DangerAlert,
            SuccessAlert
        },
        methods: {
            beforeEnter(el) {
                // eslint-disable-next-line no-console
                console.log('beforeEnter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
                // eslint-disable-next-line no-console
                // console.log(el);
            },
            enter(el, done) {
                // eslint-disable-next-line no-console
                console.log('enter');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round *10) + 'px';
                    round++;
                    if (round>20) {
                        clearInterval(interval);
                        done();
                    } 
                }, 20);
                // eslint-disable-next-line no-console
                // console.log(el);
            },
            afterEnter() {
                // eslint-disable-next-line no-console
                console.log('afterEnter');
                // eslint-disable-next-line no-console
                // console.log(el);
            },
            enterCancelled() {
                // eslint-disable-next-line no-console
                console.log('enterCancelled');
                // eslint-disable-next-line no-console
                // console.log(el);
            },
            beforeLeave(el) {
                // eslint-disable-next-line no-console
                console.log('beforeLeave');
                // eslint-disable-next-line no-console
                // console.log(el);
                this.elementWidth = 300;
                el.style.width = `${this.elementWidth}px`;
            },
            leave(el, done) {
                // eslint-disable-next-line no-console
                console.log('leave');
                // eslint-disable-next-line no-console
                // console.log(el);
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round *10) + 'px';
                    round++;
                    if (round>20) {
                        clearInterval(interval);
                        done();
                    } 
                }, 20);
            },
            afterLeave() {
                // eslint-disable-next-line no-console
                console.log('afterLeave');
                // eslint-disable-next-line no-console
                // console.log(el);
            },
            leaveCancelled() {
                // eslint-disable-next-line no-console
                console.log('leaveCancelled');
                // eslint-disable-next-line no-console
                // console.log(el);
            },
            addItem() {
                const position = Math.floor(Math.random() + this.numbers.length);
                this.numbers.splice(position, 0, this.numbers.length + 1);
            },
            removeItem(index) {
                this.numbers.splice(index, 1);
            }
        },
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s;
        /* opacity: 1; */
    }
    /* .fade-leave {

    } */
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
        /* transform: translateY((20px); */
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }
    /* .slide-leave {

    } */
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }
    .slide-move {
        transition: transform 1s;
    }
    @keyframes slide-in {
        from {
            transform: translateY(30px);
        }
        to {
            transform: translateY(0);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(30px);
        }
    }
</style>
