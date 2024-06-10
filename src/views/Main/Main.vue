<template>
    <div class="bg_main">
        <div class="header">
            <p>Moje produkty</p>
            <p class="header__switch">{{ '< >' }}</p>
        </div>

        <div class="account">
            <p class="account__title">ČSOB Študentský účet v EUR</p>
            <p class="account__num">SK01 0000 0000 0023 45678 9012</p>
            <p class="account__name">DENIS GAAL</p>
            <div class="account__money">
                <p class="account__money__text">Disponibilný zostatok</p>
                <p class="account__money__data">573,64€</p>
            </div>
        </div>

        <div class="account">
            <p class="account__title">ČSOB Študentský účet v EUR</p>
            <p class="account__num">SK01 0000 0000 0023 45678 9012</p>
            <p class="account__name">DENIS GAAL</p>
            <div class="account__money">
                <p class="account__money__text">Disponibilný zostatok</p>
                <p class="account__money__data">573,64€</p>
            </div>
        </div>

        <div class="account" style="border: 0px; padding-left: 14px;">
            <p class="account__title">Moje poistenie</p>
            <p class="account__name">Prehľad poistných zmlúv</p>
        </div>

        <div class="account" style="border: 0px; padding-left: 14px;">
            <p class="account__title">Ponuky pre Vás</p>
            <p class="account__name">Máme pre Vás 4 ponuky</p>
        </div>

        <div class="footer">
            <div class="footer__item">
                <p class="footer__item__img">[]</p>
                <p class="footer__item__name">Produkty</p>
            </div>
            <div class="footer__item">
                <p class="footer__item__img">O</p>
                <p class="footer__item__name">Pohyby</p>
            </div>
            <div class="footer__item">
                <p class="footer__item__img">OO</p>
                <p class="footer__item__name">Platby</p>
            </div>
            <router-link :to="{name: 'Shop'}">
                <div class="footer__item">
                    <p class="footer__item__img">O-O</p>
                    <p class="footer__item__name">IDS BK</p>
                </div>
            </router-link>
            <div class="footer__item">
                <p class="footer__item__img">=</p>
                <p class="footer__item__name">Viac</p>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
body
    margin: 0

a
	text-decoration: none

.bg_main
	background-color: #0f1317
	min-height: 100vh

.header
    background-color: #0f1317 !important
    height: 55px
    padding-left: 17px
    padding-right: 17px
    padding-top: 20px
    display: flex
    justify-content: space-between

    &__switch
        transform: rotate(90deg)

    p
        color: white
        font-size: 18px
    
.account
    background-color: #1a1e22
    border-left: 5px solid #0197c9
    // margin-left: 3px
    // margin-top: 3px
    // margin-bottom: 3px
    padding-left: 8px
    padding-right: 16px
    padding-top: 12px
    padding-bottom: 14px
    margin-top: 7px
    margin-bottom: 7px

    &__title
        color: #40a4c8
        font-size: 18px
        margin: 0

    &__num
        color: white
        font-size: 11px
        
    
    &__name
        color: white
        font-size: 15px
        margin: 0

    &__money
        display: flex
        justify-content: space-between

        &__text
            color: #62666a
            font-size: 15px
            margin-top: 8px
            margin-bottom: 0px
        
        &__data
            color: #58932a
            font-size: 15px
            margin-top: 8px
            margin-bottom: 0px

.footer
    background-color: #1a1e22
    width: 100%
    height: 55px
    display: flex
    justify-content: space-between
    position: absolute
    bottom: 0px

    &__item
        color: #a4a8ac
        justify-content: center

        &__img
            display: flex
            justify-content: center
            margin: 4px

        &__name
            margin: 4px

    &__active
        color: #40a4c8
</style>