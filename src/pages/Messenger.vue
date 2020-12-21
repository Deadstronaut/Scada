<template>
	<div class="q-pa-md doc-container">
		<q-list bordered padding class="outsideBox" style="max-width: 2440px">
			<div class="row">
				<div class="col" align="center">
					<div class="btnBoxWorker" tabindex="0">
						<q-btn-dropdown
							padding="xs lg"
							color=""
							label="Target Worker"
							icon="engineering"
						>
							<q-list>
								<q-item
									clickable
									v-close-popup
									@click="onItemClick"
								>
									<q-item-section>
										<q-item-label>Photos</q-item-label>
									</q-item-section>
								</q-item>

								<q-item
									clickable
									v-close-popup
									@click="onItemClick"
								>
									<q-item-section>
										<q-item-label>Videos</q-item-label>
									</q-item-section>
								</q-item>

								<q-item
									clickable
									v-close-popup
									@click="onItemClick"
								>
									<q-item-section>
										<q-item-label>Articles</q-item-label>
									</q-item-section>
								</q-item>
							</q-list>
						</q-btn-dropdown>
					</div>
				</div>
				<div class="col" align="center">
					<q-btn rounded color="" label="BENJI BUTTON" class="" />
				</div>

				<div class="col" align="center">
					<div class="btnBoxFunctions" tabindex="0">
						<q-btn-dropdown
							padding="xs lg"
							color=""
							label="Functions"
							icon="psychology"
						>
							<q-list>
								<q-item
									clickable
									v-close-popup
									@click="onItemClick"
								>
									<q-item-section>
										<q-item-label>Photos</q-item-label>
									</q-item-section>
								</q-item>

								<q-item
									clickable
									v-close-popup
									@click="onItemClick"
								>
									<q-item-section>
										<q-item-label>Videos</q-item-label>
									</q-item-section>
								</q-item>

								<q-item
									clickable
									v-close-popup
									@click="onItemClick"
								>
									<q-item-section>
										<q-item-label>Articles</q-item-label>
									</q-item-section>
								</q-item>
							</q-list>
						</q-btn-dropdown>
					</div>
				</div>
			</div>
			<!-- First Box -->
			<div class="q-pa-md q-gutter-none">
				<q-list
					bordered
					padding
					class="firstBox"
					style="max-width: 2440px"
				>
				</q-list>
			</div>
			<!-- Second Box -->
			<div class="q-pa-md q-gutter-none">
				<q-list
					bordered
					padding
					class="secondBox"
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
.row
  height: auto

.row > div

.col

.doc-container > div + div
	margin-top: 1rem

.btnBoxWorker
	fixed-left, absolute-left
	margin: 5px
	padding: auto

.btnBoxFunctions
	fixed-right, absolute-right
	margin: 5px
	padding: auto

.firstBox
	padding: auto
	margin: auto
	background: green
	height: 22.8rem

.secondBox
	padding: auto
	margin: auto
	background: green
	height: 22.8rem
</style>