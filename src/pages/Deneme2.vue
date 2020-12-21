<template>
	<div class="q-pa-md">
		<div class="q-gutter-y-md" style="max-width: 2550px">
			<q-card bordered>
				<q-tabs
					v-model="tab"
					dense
					class="text-grey"
					active-color="primary"
					indicator-color="primary"
					align="justify"
					narrow-indicator
				>
					<q-tab name="virtualdevices" label="Virtual Devices" />
					<q-tab name="projectree" label="Project Tree" />
					<q-tab name="sender" label="Sender" />
					<q-tab name="contants" label="Constants" />
				</q-tabs>
				<q-card>
					<q-tab-panels v-model="tab" animated>
						<q-tab-panel name="mails">
							<div class="text-h6">Mails</div>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</q-tab-panel>

						<q-tab-panel name="alarms">
							<div class="text-h6">Alarms</div>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</q-tab-panel>

						<q-tab-panel name="movies">
							<div class="text-h6">Movies</div>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</q-tab-panel>
					</q-tab-panels>

					<q-separator />

					<q-tabs
						v-model="tab"
						dense
						dark
						align="justify"
						narrow-indicator
					>
						<q-tab name="mails" label="Mails" />
						<q-tab name="alarms" label="Alarms" />
						<q-tab name="movies" label="Movies" />
					</q-tabs>
				</q-card>
			</q-card>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tab: "mails",
			};
		},
	};
</script>

<style>
</style>