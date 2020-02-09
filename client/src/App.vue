<template>
	<div id="app">
		<section class="body">
			<Sidebar />
			<main>
				<router-view></router-view>
			</main>

		</section>
	</div>
</template>

<script>

	import Sidebar from "./components/Sidebar";

	export default {
		name: 'app',
		components: {
			Sidebar,
		}
	}
</script>

<style lang="scss">
	$highlight : #83E8BA;

	* {
		box-sizing: border-box;
	}

	a {
		color: $highlight;
	}

	body {
		background: url("./assets/background.png");
		padding: 5rem 0;
		margin: 0;
	}

	h2, h3 {
		font-weight: normal;
	}
	h2 {
		margin: 0 0 2rem 0;

		svg {
			font-size: medium !important;
			color: #83E8BA;
			vertical-align: middle !important;
			margin-left: 2rem;
			cursor: pointer;
			transition: all 0.2s ease-in-out;

			&:hover {
				color: #5ea887;
			}
		}
	}

	main {
		padding: 2rem;
		overflow-x: auto;
	}

	.body {
		display: grid;
		height: 100%;
		grid-template-columns: 25% auto;
		grid-gap: 1rem;
		border-top: solid 5px $highlight;
		min-height: 500px;
		font-family: sans-serif;
		background: #444;
		box-shadow: 0 0 12px rgba(0,0,0,0.6);
		color: #eee;
		max-width: 1024px;
		margin: 0 auto;
		width: 100%;
	}
</style>
