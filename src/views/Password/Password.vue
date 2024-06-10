<template>
	<div class="bg_pasw">
		<div class="text">
			<p>Zadajte Váš PIN</p>
		</div>

		<div class="password">
			<div v-if="passwBalls >= 1" class="password__ball" style="left: 50px;"></div>
			<div class="password__bar" :class="{'password__bar__active': passwBalls == 0}"/>
			<div v-if="passwBalls >= 2" class="password__ball" style="left: 125px;"></div>
			<div class="password__bar" :class="{'password__bar__active': passwBalls == 1}"/>
			<div v-if="passwBalls >= 3" class="password__ball"></div>
			<div class="password__bar" :class="{'password__bar__active': passwBalls == 2}"/>
			<div v-if="passwBalls >= 4" class="password__ball" style="right: 125px;"></div>
			<div class="password__bar" :class="{'password__bar__active': passwBalls == 3}"/>
			<div v-if="passwBalls >= 5" class="password__ball" style="right: 50px;"></div>
			<div class="password__bar" :class="{'password__bar__active': passwBalls == 4}"/>
		</div>
		
		<div class="input">
			<div class="input__group" @click="passwBalls++">
				<p class="input__group__number">1</p>
				<p class="input__group__number">2</p>
				<p class="input__group__number">3</p>
			</div>
			<div class="input__group" @click="passwBalls++">
				<p class="input__group__number">4</p>
				<p class="input__group__number">5</p>
				<p class="input__group__number">6</p>
			</div>
			<div class="input__group" @click="passwBalls++">
				<p class="input__group__number">7</p>
				<p class="input__group__number">8</p>
				<p class="input__group__number">9</p>
			</div>
			<div class="input__group" style="margin-left: -25px;">
				<router-link :to="{ name: 'Home' }">
					<p style="color: #1098c5; font-size: 22px;" @click="passwBalls = 0">Zrušiť</p>
				</router-link>
				<p class="input__group__number">0</p>
				<p style="color: #1098c5; font-size: 22px;" @click=" passwBalls--">{{ '<=' }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			passwBalls: 0
		}
	},

	watch: {
		passwBalls(){
			if(this.passwBalls == 5) this.$router.push('/main')
			if(this.passwBalls <=0 ) this.passwBalls = 0
		}
	}
}
</script>

<style lang="sass">
body
	margin: 0

a
	text-decoration: none

.bg_pasw
	background-color: #1b1e22
	min-height: 100vh

.text
	display: flex
	justify-content: center

	p
		color: white
		font-size: 19px
		position: relative
		top: 250px

.password
	display: flex
	position: relative
	top: 350px
	justify-content: center

	&__bar
		border-bottom: 3px solid #2c3034 
		margin: 0px 10px 
		min-width: 49px

		&__active
			border-bottom: 3px solid #1098c5
	
	&__ball
		border-radius: 20px 
		background-color: #1098c5 
		min-width: 16px 
		height: 16px 
		position: absolute 
		top: -35px 

.input
	margin: 0px 68px 
	position: relative 
	top: 416px

	&__group
		display: flex 
		justify-content: space-between

		&__number
			color: white 
			font-size: 22px
</style>