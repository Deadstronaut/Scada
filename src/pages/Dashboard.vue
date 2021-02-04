<template>
	<div class="q-pa-md q-gutter-none">
		<q-list
			bordered
			padding
			class="rounded-borders"
			style="max-width: 2440px"
		>
			<q-item-label header>Workers</q-item-label>
			<q-separator />
			<q-item :key="worker.Key" v-for="worker in getAllWorkers" v-ripple>
				<q-item-section avatar top>
					<q-avatar
						icon="check_circle"
						v-if="worker.status === 'online'"
						color="positive"
						text-color="white"
					>
						<q-tooltip> Worker Connected </q-tooltip>
					</q-avatar>

					<q-avatar
						icon="cancel"
						v-else-if="worker.status === 'disconnect'"
						color="negative"
						text-color="white"
					>
						<q-tooltip> Worker Disconnected </q-tooltip>
					</q-avatar>

					<q-avatar
						icon="pause_circle_filled"
						v-else
						color="warning"
						text-color="white"
					>
						<q-tooltip> Worker Offline </q-tooltip>
					</q-avatar>
				</q-item-section>

				<q-item-section>
					<q-item-label lines="1">{{
						worker.workername
					}}</q-item-label>
					<q-item-label caption>
						<datetimeview
							:inputDatetime="worker.timestamp"
						></datetimeview>
					</q-item-label>
				</q-item-section>
				<q-btn
					flat
					size=""
					v-if="worker.status !== 'online'"
					color="negative"
					icon="delete_forever"
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
					<q-tooltip> Remove Worker </q-tooltip>
				</q-btn>
				<q-item-section side>
					{{ worker.username }}
				</q-item-section>
			</q-item>
		</q-list>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";
	import { date } from "quasar";
	export default {
		name: "Dashboard",
		computed: {
			...mapGetters("scadadata", ["getAllWorkers"]),
		},
		components: {
			datetimeview: require("components/DatetimeView").default,
		},
	};
</script>

<style scoped></style>
