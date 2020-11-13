<template>
	<div class="q-pa-md">
		<q-list
			bordered
			padding
			class="rounded-borders"
		>
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
							name="virtualdevices"
							label="Virtual Devices"
						/>
						<q-tab
							name="projectree"
							label="Project Tree"
						/>

					</q-tabs>

					<q-separator />

					<q-tab-panels
						v-model="tab"
						animated
					>
						<q-tab-panel name="virtualdevices">

							<virtualdevicelist></virtualdevicelist>
						</q-tab-panel>

						<q-tab-panel name="projectree">
							<div class="text-h6">Alarms</div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</q-tab-panel>

					</q-tab-panels>
				</q-card>

			</div>
		</q-list>
	</div>
</template>

<script>
	import { bus } from "../boot/scadainit";
	import { client } from "../boot/scadainit";
	export default {
		name: "ProjectManagement",
		components: {
			virtualdevicelist: require("components/VirtualDeviceList").default,
		},

		data() {
			return {
				tab: "virtualdevices",
			};
		},
	};
</script>

<style>
</style>