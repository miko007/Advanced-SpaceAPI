<template>
	<section>
		<h2>General information</h2>
		<form>
			<label>Name of Space</label>
			<input type="text" name="name" />

			<label>Website</label>
			<input type="url" name="website" placeholder="https://" />

			<label>Logo URL</label>
			<input type="url" name="logo" placeholder="https://" />

			<h3>Location</h3>
			<label>Address</label>
			<input type="text" name="address" />

			<label>Longitude</label>
			<input type="number" step="0.0000001" name="long" />

			<label>Latitude</label>
			<input type="number" step="0.0000001" name="lat" />

			<label>Webcams <span>(one URL per line)</span></label>
			<textarea name="webcams"></textarea>

			<h3>Contact</h3>
			<label>Phone</label>
			<input type="tel" name="phone" />

			<label>SIP URI</label>
			<input type="text" name="sip" />

			<label>IRC</label>
			<input type="text" name="irc" />

			<label>Twitter</label>
			<input type="text" name="twitter" placeholder="@..." />
		</form>
		<p>
			<button>save</button>
		</p>
	</section>
</template>

<script>
	export default {
		name: "Main"
	}
</script>

<style lang="scss" scoped>
	p {
		text-align: right;
	}

	button {
		background: #5EA887;
		color: white;
		text-transform: uppercase;
		border: none;
		font-size: 1rem;
		padding: 1rem 1.5rem;
	}

	form {
		display: grid;
		grid-template-columns: auto 70%;
		grid-gap: 1rem;
		align-items: center;
		margin-bottom: 4rem;


		h3 {
			grid-column: 1 / span 2;
			border-bottom: solid 1px #5EA887;
			padding: 0.5rem;
		}

		label {
			color: #aaa;
			padding-left: 0.5rem;

			span {
				display: block;
				font-size: x-small;
				color: #888;
			}
		}

		input, textarea {
			background: #555;
			border: none;
			padding: 0.8rem;
			outline: none;
			color: white;
			font-size: 1rem;
			position: relative;
			border-bottom: solid 3px transparent;
			transition: all 0.2s ease-in-out;

			&:focus {
				border-color: forestgreen;
			}
		}
	}
</style>
