<template>
	<section class="tablewrap">
		<table>
			<tr>
				<th v-for="header in headers" v-bind:key="header">{{header}}</th>
			</tr>
			<tr v-for="row in data" v-bind:key="row.id">
				<td v-for="(value, key) in row" v-bind:key="key">{{value}}</td>
			</tr>
		</table>
	</section>
</template>

<script>
	export default {
		name  : "SortableTable",
		props : [
			"headers",
			"data"
		],
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>

	.tablewrap {
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 1rem;
		border: solid 1px #333;

		tr {
			td, th {
				padding: 1rem;
				border-right: solid 1px #333;
			}

			td {
				font-size: 0.8rem;
			}

			th {
				background: #222;
				border-top: solid 3px #83E8BA;
				text-align: left;
				padding-left: 2rem;
				white-space: nowrap;
			}

			&:hover {
				background: rgba(255,255,255,0.15) !important;
			}

			&:nth-child(odd) {
				background: rgba(255,255,255,0.1);
			}
		}
	}
</style>
