<template>
	<q-card style="min-width: 330px">
		<q-card-section class="q-pb-none">
			<div class="text-h6">{{ $t("Scada Login") }}</div>
		</q-card-section>

		<q-card-section>
			<div class="q-mb-sm">
				<q-input
					dense
					v-model="LoginData.Server"
					:label="$t('server')"
					:rules="[(val) => !!val || 'Field is required']"
				>
					<template v-slot:prepend>
						<q-icon name="dns" />
					</template>
				</q-input>
			</div>
			<div class="q-mb-sm">
				<q-input
					dense
					:label="$t('pool')"
					v-model="LoginData.Pool"
					:rules="[(val) => !!val || 'Field is required']"
				>
					<template v-slot:prepend>
						<q-icon name="group_work" />
					</template>
				</q-input>
			</div>
			<div class="q-mb-sm">
				<q-input
					dense
					:label="$t('username')"
					v-model="LoginData.Username"
					:rules="[(val) => !!val || 'Field is required']"
				>
					<template v-slot:prepend>
						<q-icon name="face" />
					</template>
				</q-input>
			</div>
			<div class="q-mb-sm">
				<q-input
					dense
					type="password"
					:label="$t('password')"
					v-model="LoginData.Password"
					:rules="[(val) => !!val || $t('Field is required')]"
				>
					<template v-slot:prepend>
						<q-icon name="vpn_key" />
					</template>
				</q-input>
			</div>
		</q-card-section>
		<q-card-actions align="right" class="text-primary q-pt-none">
			<q-btn
				color="primary"
				icon-right="send"
				:label="$t('login')"
				v-on:click="login(LoginData)"
			/>
		</q-card-actions>
	</q-card>
</template>
<script>
	import { mapActions, mapGetters } from "vuex";

	export default {
		name: "LoginCard",
		data() {
			return {
				LoginData: {
					Server: "ws://broker.kerembilgicer.com:8083/mqtt",
					Pool: "Scada",
					Username: "master",
					Password: "1234",
				},
			};
		},
		mounted() {},
		computed: {
			...mapGetters("auth", ["kedi"]),
		},
		methods: {
			...mapActions("auth", ["updateStatus", "login"]),
			openLoginModel: function (value) {
				this.showLoginModal = value;
				this.errordata = "";
			},

			test: function () {
				this.updateStatus();
			},
		},
	};
</script>
<style scoped></style>
