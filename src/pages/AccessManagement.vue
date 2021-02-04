<template>
	<div class="q-pa-md">
		<q-list
			bordered
			padding
			class="outsideBox"
			style="max-width: 2440px"
		>
			<div class="row items-start">
				<div
					class="btnBoxWorker"
					tabindex="0"
				>
					<q-btn-dropdown
						padding="xs lg"
						color=""
						label="Target Privileges"
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
				<div class="col">
				</div>
				<div
					class="btnBoxFunctions"
					tabindex="0"
				>
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
			<div class="q-pa-md q-gutter-none">
				<q-list
					bordered
					padding
					class="firstBox"
					style="max-width: 2440px"
				>
				</q-list>
			</div>

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
		<div
			class="q-gutter-y-md"
			style="max-width: 2440px"
		>

			<q-card>
				<q-tabs
					v-model="tab"
					dense
					class="text-grey"
					active-color="primary"
					indicator-color="primary"
					align="justify"
					narrow-indicator
				>
					<q-tab
						name="tagsPrivileges"
						label="Tags Privileges"
					/>
					<q-tab
						name="workerPrivileges"
						label="Worker Privileges"
					/>

				</q-tabs>

				<q-separator />

				<q-tab-panels
					v-model="tab"
					animated
				>
					<q-tab-panel name="tagsPrivileges">
						<div class="text-h6">Tags Privileges</div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</q-tab-panel>

					<q-tab-panel name="workerPrivileges">
						<div class="text-h6">Worker Privileges</div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</q-tab-panel>
				</q-tab-panels>
			</q-card>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tab: "tagsPrivileges",
			};
		},
	};
</script

<style>
</style>