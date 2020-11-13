<template>
  <div>
    {{ viewdate }}
  </div>
</template>
<script>
import { date } from "quasar";

export default {
  name: "DatetimeView",

  props: {
    inputDatetime: Date
  },
  data() {
    return {
      viewdate: ""
    };
  },
  components: {},
  watch: {
    inputDatetime: {
      // watch it
      deep: true,
      immediate: true,
      handler() {
        if (this.inputDatetime !== undefined) {
          this.viewdate = date.formatDate(
            this.inputDatetime,
            " DD-MM-YYYY HH:mm:ss"
          );
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
