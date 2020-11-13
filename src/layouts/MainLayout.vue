<template>
	<q-layout view="lHh Lpr lFf">
		<q-header elevated>
			<q-toolbar class="glossy">
				<q-btn
					flat
					dense
					round
					icon="menu"
					aria-label="Menu"
					@click="leftDrawerOpen = !leftDrawerOpen"
				/>
				<q-dialog
					v-model="isDisconnected"
					persistent
					dense
				>
					<logincard></logincard>
				</q-dialog>
				<q-toolbar-title>{{ $t(currentRouteName) }}</q-toolbar-title>

				<q-item class="q-pl-none q-pr-none">
					<q-select
						v-model="lang"
						:options="langOptions"
						dense
						borderless
						emit-value
						map-options
						options-dense
					/>
					<q-item-section avatar>
						<q-avatar
							size="lg"
							color="brown-7"
							text-color="white"
						>
							{{ CurrentUserFullname.getInitials() }}
							<q-badge
								v-if="isDisconnected"
								color="red"
								floating
							>D</q-badge>
							<q-badge
								v-else
								color="light-green-9"
								floating
							>C</q-badge>
						</q-avatar>
					</q-item-section>
					<q-item-section>
						<q-item-label>{{ CurrentUserFullname }}</q-item-label>
						<q-item-label caption>Administrator</q-item-label>
					</q-item-section>

					<q-item-section
						v-if="isConnected"
						side
						avatar
					>
						<q-icon
							class="q-pr-none"
							name="exit_to_app"
						/>
					</q-item-section>
				</q-item>
			</q-toolbar>
		</q-header>

		<q-drawer
			v-model="leftDrawerOpen"
			show-if-above
			bordered
			:width="250"
			:breakpoint="600"
		>
			<div class=" q-pa-sm glossy">
				<img
					src="~assets/logosav.png"
					style="max-width:150px;"
				/>
			</div>
			<q-separator />
			<q-list>
				<q-item
					v-for="item in menuitems"
					:key="item.title"
					:to="item.link"
					exact
					clickable
				>
					<q-item-section avatar>
						<q-icon :name="item.icon" />
					</q-item-section>
					<q-item-section>
						<q-item-label>{{ $t(item.title) }}</q-item-label>
					</q-item-section>
				</q-item>
			</q-list>
		</q-drawer>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
	import EssentialLink from "components/EssentialLink.vue";
	import { mapActions, mapGetters } from "vuex";
	import edi from "components/DatetimeView.vue";
	export default {
		name: "MainLayout",
		data() {
			return {
				leftDrawerOpen: false,
				menuitems: [
					{
						title: "t_dashboard",
						icon: "dashboard",
						link: "/",
					},
					{
						title: "Messenger",
						icon: "markunread_mailbox",
						link: "/messenger",
					},
					{
						title: "User Management",
						icon: "people",
						link: "/usermanagement",
					},
					{
						title: "Project Management",
						icon: "perm_media",
						link: "/projectmanagement",
					},
					{
						title: "Alarm Management",
						icon: "notification_important",
						link: "/alarmmanagement",
					},
					{
						title: "Access Management",
						icon: "lock_open",
						link: "/accessmanagement",
					},
					{
						title: "Scenerio Management",
						icon: "movie",
						link: "/sceneriomanagement",
					},
					{
						title: "Calculation Management",
						icon: "calculate",
						link: "/calculationmanagement",
					},
					{
						title: "Data Viewer",
						icon: "storage",
						link: "/dataviewer",
					},
					{
						title: "Alarm Clock",
						icon: "add_alert",
						link: "/alarmclock",
					},
					{
						title: "Deneme",
						icon: "flaky",
						link: "/deneme",
					},
				],
				lang: this.$i18n.locale,
				langOptions: [
					{ value: "en-us", label: "English" },
					{ value: "tr-tr", label: "Türkçe" },
				],
			};
		},
		components: {
			EssentialLink,
			edi,
			logincard: require("components/LoginCard").default,
		},

		computed: {
			...mapGetters("auth", [
				"isConnected",
				"isDisconnected",
				"CurrentUser",
				"CurrentUserFullname",
			]),

			...mapGetters("scadadata", ["getAllConstantValue"]),
			currentRouteName() {
				return this.$route.name;
			},
		},
		watch: {
			lang(lang) {
				this.$i18n.locale = lang;
			},
		},
	};
</script>
