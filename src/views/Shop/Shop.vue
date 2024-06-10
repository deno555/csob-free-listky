<template>
    <div class="bg_shop">
        <div class="header">
            <p style="padding-right: 35px;">O</p>
            <p class="header__title" style="padding-right: 191px;">IDS BK</p>
            <p style="padding-right: 29px;">:</p>
            <p style="">x</p>
        </div>

        <div class="switch">
            <p class="switch__item" :class="{'switch__active': active == 0}" @click="active = 0">CESTOVNÉ LÍSTKY</p>
            <p class="switch__item" :class="{'switch__active': active == 1}" @click="active = 1">ELEKTRIČENKA</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0
            }
        }
    }
</script>

<style lang="sass">
body
	margin: 0

a
	text-decoration: none

.bg_shop
	background-color: #f4f4f4
	min-height: 100vh

.header
    background-color: #0f1317
    display: flex
    color: white
    // justify-content: space-evenly
    font-size: 18px
    height: 55px
    padding-left: 16px
    padding-right: 10px

.switch
    display: flex
    back

    &__item
        width: 50%
        display: flex
        justify-content: center
        align-items: center
        color: #717171
        height: 44px
        font-size: 13px
        font-weight: 800
    
    &__active
        color: #29819f
        border-bottom: 2px solid #29819f
        width: 50%
        display: flex
        justify-content: center
        align-items: center
        height: 44px
        font-size: 13px
        font-weight: 800

.credit
    

</style>