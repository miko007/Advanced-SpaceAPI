<template>
	<aside>
		<router-link to="/">
			<font-awesome-icon icon="info-circle" />
			Basic information
		</router-link>
		<router-link to="/keymasters">
			<font-awesome-icon icon="key" />
			Keymasters
		</router-link>
		<router-link to="/api">
			<font-awesome-icon icon="user-cog" />
			API keys
		</router-link>
	</aside>
</template>

<script>
	export default {
		name: "Sidebar"
	}
</script>

<style lang="scss" scoped>
	aside {
		padding-top: 3rem;
		border-right: solid 1px #555;
	}

	a {
		display: block;
		width: 100%;
		padding: 1rem 1.5rem;
		text-decoration: none;
		color: white;
		border-left: solid 3px transparent;
		border-bottom: solid 1px #555;
		transition: all 0.2s ease-in-out;
		white-space: nowrap;

		&.router-link-exact-active {
			border-left-color: #83E8BA;

			svg {
				color: #5EA887;
			}
		}

		svg {
			margin-right: 0.5rem;
			color: lighten(#5EA887, 30%);
			transition: all 0.2s ease-in-out;
		}

		&:hover {
			background: rgba(255,255,255,0.1);
		}
	}
</style>
