<template>
	<div class="q-pa-md">
		<div
			class="q-gutter-y-md"
			style="max-width: 2440px"
		>

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
					<q-tab
						name="alarmManagement"
						label="Alarm Management"
					/>
					<q-tab
						name="alarmList"
						label="Alarm List"
					/>
					<q-tab
						name="alarmCount"
						label="Alarm Count"
					/>
				</q-tabs>

				<q-separator />

				<q-tab-panels
					v-model="tab"
					animated
				>
					<q-tab-panel name="alarmManagement">
						<div class="text-h6">Mails</div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</q-tab-panel>

					<q-tab-panel name="alarmList">
						<div class="text-h6">Alarms</div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</q-tab-panel>

					<q-tab-panel name="alarmCount">
						<div class="text-h6">Movies</div>
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
				tab: "alarmManagement",
			};
		},
	};
</script

<style>
</style>