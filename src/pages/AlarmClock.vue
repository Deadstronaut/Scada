<template>
	<div class="q-pa-md doc-container">
		<q-list
			bordered
			padding
			class="outsideBox"
			style="max-width: 2440px"
		>
			<div class="row">
				<div class="col">
					<q-btn
						unelevated
						rounded
						color="primary"
						label="Unelevated Rounded"
					/>
				</div>
				<div class="col">
					<q-btn
						unelevated
						rounded
						color="primary"
						label="Unelevated Rounded"
					/>
				</div>
				<div class="col">
					<q-btn
						unelevated
						rounded
						color="primary"
						label="Unelevated Rounded"
					/>
				</div>

			</div>

			<div class="q-pa-md q-gutter-none">
				<q-list
					bordered
					padding
					class="box"
					style="max-width: 2440px"
				>
				</q-list>
			</div>

		</q-list>

	</div>
</template>

<script>
	export default {};
</script>

<style lang="sass" scoped>
.col
	fixed-center

.box
	padding: auto
	margin: auto
	background: green
	height: 44.4rem

.row > div
	padding: 10px 15px
	background: rgba(86,61,124,.15)
	border: 1px solid rgba(86,61,124,.2)
.row + .row
	margin-top: 1rem
</style>