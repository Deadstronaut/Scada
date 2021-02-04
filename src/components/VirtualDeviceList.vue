<template>
	<div class="q-pa-none">
		<q-table
			:data="virtualdevices"
			:columns="columns"
			:class="tableClass"
			tabindex="0"
			row-key="Name"
			selection="single"
			align="left"
			:selected.sync="selected"
			:pagination.sync="pagination"
			dense
			@click="props.expand = !props.expand"
		>
			<template v-slot:body="props">
				<q-tr :props="props">
					<q-td auto-width>
						<q-btn
							size="sm"
							color=""
							dense
							@click="props.expand = !props.expand"
							:icon="props.expand ? 'remove' : 'add'"
						/>
					</q-td>
					<q-td
						v-for="col in props.cols"
						:key="col.name"
						:props="props"
					>
						{{ col.value }}
					</q-td>
				</q-tr>
				<q-tr v-show="props.expand" :props="props">
					<q-td colspan="100%">
						<div class="text-left">
							<q-btn-group outline>
								<q-btn
									v-on:click="openCreateUserModel(true)"
									round
									flat
									color="positive"
									icon="add"
									label="Add  LOREM"
									align="around"
									class="q-px-sm"
								>
									<q-tooltip> Add User </q-tooltip>
								</q-btn>
								<q-btn
									dense
									text-color="warning"
									flat
									icon="create"
									label="Edit  LOREM"
									align="around"
									class="q-px-sm"
									v-on:click="
										openEditUserModel({ open: true, user })
									"
								>
									<q-tooltip> Edit User </q-tooltip>
								</q-btn>

								<q-btn
									text-color="red-14"
									flat
									dense
									icon="delete_forever"
									label="Delete  LOREM"
									align="around"
									class="q-px-sm"
									v-on:click="deleteUser(user)"
									@click="alert = true"
								>
									<q-dialog v-model="confirm" persistent>
										<q-card-actions align="right">
											<q-btn
												flat
												label="Cancel"
												color="primary"
												v-close-popup
											/>
											<q-btn
												flat
												label="Delete User?"
												color="primary"
												v-close-popup
											/>
										</q-card-actions>
									</q-dialog>

									<q-tooltip> Delete User </q-tooltip>
								</q-btn>
							</q-btn-group>
						</div>
					</q-td>
				</q-tr>
			</template>
		</q-table>

		<div class="q-mt-md">Selected : {{ JSON.stringify(selected) }}</div>
	</div>
</template>
<script>
	import { mapActions, mapGetters } from "vuex";
	import { bus } from "../boot/scadainit";
	import { client } from "../boot/scadainit";
	export default {
		name: "VirtualDeviceList",

		props: {
			msg: String,
		},
		data() {
			return {
				rpcgetvirtualdevices: "",
				rpcgetvirtualdevice: "",
				virtualdevices: [],
				deviceproperties: [],
				devicealarms: [],
				devicecommands: [],
				myvalue: "",
				selected: [],

				pagination: {
					rowsPerPage: 10,
				},
				columns: [
					{
						name: "desc",
						required: true,
						label: "VirtualDevice Name",
						align: "left",
						field: (row) => row.Name,
						format: (val) => `${val}`,
						sortable: true,
					},
					{
						name: "alias",
						required: true,
						label: "VirtualDevice Alias",
						align: "left",
						field: (row) => row.Alias,
						format: (val) => `${val}`,
						sortable: true,
					},
				],
			};
		},
		components: {},
		computed: {},
		methods: {
			refresh: function () {
				this.rpcgetvirtualdevices = client.callrpc(
					"Project",
					"GetAllVirtualDeviceNames",
					"{}"
				);
			},
			loadvirtualdevice: function () {
				this.rpcgetvirtualdevice = client.callrpc(
					"Project",
					"GetVirtualDevice",
					JSON.stringify(this.selected)
				);
			},
		},
		created: function () {
			this.refresh();
			bus.$on("RpcResult", (data) => {
				if (data.uid === this.rpcgetvirtualdevices) {
					let innerlist = [];
					for (var key in data.message) {
						innerlist.push(data.message[key]);
					}
					innerlist.sort((a, b) => a.Name.localeCompare(b.Name));
					this.virtualdevices = innerlist;
				}

				if (data.uid === this.rpcgetvirtualdevice) {
					let innerproperties = [];
					for (key in data.message.Properties) {
						innerproperties.push(data.message.Properties[key]);
					}
					innerproperties.sort((a, b) => a.Name.localeCompare(b.Name));
					this.deviceproperties = innerproperties;

					let inneralarms = [];
					for (key in data.message.Alarms) {
						inneralarms.push(data.message.Alarms[key]);
					}
					inneralarms.sort((a, b) => a.Name.localeCompare(b.Name));
					this.devicealarms = inneralarms;

					let innercommands = [];
					for (key in data.message.Commands) {
						innercommands.push(data.message.Commands[key]);
					}
					innercommands.sort((a, b) => a.Name.localeCompare(b.Name));
					this.devicecommands = innercommands;
				}
			});
		},
	};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
