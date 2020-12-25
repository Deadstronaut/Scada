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
						<q-tab-panel name="virtualdevices">
							<q-btn-group spread>
								<q-btn
									color=""
									label="Load All"
									icon="get_app"
								/>
								<q-btn
									color=""
									label="Send All"
									icon="publish"
								/>
								<q-btn
									color=""
									label="Export File"
									icon="cloud_download"
								/>
								<q-btn
									color=""
									label="Import File"
									icon="cloud_upload"
								/>
							</q-btn-group>

							<virtualdevicelist></virtualdevicelist>
						</q-tab-panel>
					</q-tab-panels>

					<q-separator />

					<q-tabs
						v-model="tab"
						dense
						class="text-grey"
						active-color="primary"
						indicator-color="primary"
						align="justify"
						narrow-indicator
					>
						<q-tab name="properties" label="Properties" />
						<q-tab name="alarm" label="Alarm" />
						<q-tab name="command" label="Command" />
					</q-tabs>

					<q-tab-panels v-model="tab" animated>
						<q-tab-panel name="properties">
							<q-table
								title="TITLE"
								dense
								:data="propData"
								:columns="properties"
								row-key="name"
								dark
							/>
						</q-tab-panel>

						<q-tab-panel name="alarm">
							<q-table
								title="TITLE"
								dense
								:data="alarmsData"
								:columns="alarms"
								row-key="name"
								dark
							/>
						</q-tab-panel>

						<q-tab-panel name="command">
							<q-table
								title="TITLE"
								dense
								:data="commandsData"
								:columns="commands"
								row-key="name"
								dark
							/>
						</q-tab-panel>
					</q-tab-panels>
				</q-card>
			</q-card>
		</div>
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
				properties: [
					{
						name: "alias",
						align: "left",
						label: "Alias",
						field: "alias",
						sortable: true,
					},
					{
						name: "name",
						align: "center",
						label: "Name",
						field: "name",
						sortable: true,
					},
					{
						name: "valuetype",
						align: "center",
						label: "ValueType",
						field: "valuetype",
						sortable: true,
					},
					{
						name: "lowlimit",
						align: "center",
						label: "LowLimit",
						field: "lowlimit",
						sortable: true,
					},
					{
						name: "highLimit",
						align: "center",
						label: "HighLimit",
						field: "highLimit",
						sortable: true,
					},
					{
						name: "unitname",
						align: "center",
						label: "UnitName",
						field: "unitname",
						sortable: true,
					},
					{
						name: "formula",
						align: "center",
						label: "Formula",
						field: "formula",
						sortable: true,
					},
					{
						name: "epsilon",
						align: "center",
						label: "Epsilon",
						field: "epsilon",
						sortable: true,
					},
				],
				propData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				alarms: [
					{
						name: "alias",
						align: "left",
						label: "Alias",
						field: "alias",
						sortable: true,
					},
					{
						name: "name",
						align: "center",
						label: "Name",
						field: "name",
						sortable: true,
					},
					{
						name: "inscadatype",
						align: "center",
						label: "InScadaType",
						field: "inscadatype",
						sortable: true,
					},
					{
						name: "intarget",
						align: "center",
						label: "InTarget",
						field: "intarget",
						sortable: true,
					},
					{
						name: "condition",
						align: "center",
						label: "Condition",
						field: "condition",
						sortable: true,
					},
					{
						name: "priority",
						align: "center",
						label: "Priority",
						field: "priority",
						sortable: true,
					},
				],
				alarmsData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				commands: [
					{
						name: "alias",
						align: "left",
						label: "Alias",
						field: "alias",
						sortable: true,
					},
					{
						name: "name",
						align: "center",
						label: "Name",
						field: "name",
						sortable: true,
					},
					{
						name: "valuetype",
						align: "center",
						label: "ValueType",
						field: "valuetype",
						sortable: true,
					},
					{
						name: "lowlimit",
						align: "center",
						label: "LowLimit",
						field: "lowlimit",
						sortable: true,
					},
					{
						name: "highLimit",
						align: "center",
						label: "HighLimit",
						field: "highLimit",
						sortable: true,
					},
					{
						name: "unitname",
						align: "center",
						label: "UnitName",
						field: "unitname",
						sortable: true,
					},
				],
				commandsData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			};
		},
	};
</script>

<style>
</style>