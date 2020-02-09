<template>
	<section class="keymasters">
		<h2>Keymasters <font-awesome-icon icon="plus-circle"></font-awesome-icon></h2>
		<sortable-table v-bind:headers="headers" v-bind:data="content"></sortable-table>
	</section>
</template>

<script>

	import SortableTable from "./basic/SortableTable";

	export default {
		name       : "KeyMasters",
		components : {
			SortableTable
		},
		data() {
			return {
				headers : [
					"Name",
					"IRC Nick",
					"Email",
					"Twitter"
				],
				content : null
			}
		},
		mounted() {
			fetch("http://127.0.0.1:3000/contact").then(response => response.json()).then(json => {
				//this.$data.headers = Object.keys(json.keymasters[0]);
				this.$data.content = json.keymasters;
			}).catch();
		}
	}
</script>

<style scoped>

</style>
