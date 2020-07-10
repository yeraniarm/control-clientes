import Header from "../../components/Header.vue";

export default {
  created() {
    this.$store.dispatch("fetchClient");
  },
  components: {
    "app-header": Header
  },
  data() {
    return {
      titles: ["Id", "Nombre", "RFC", "Teléfono"]
    };
  },
  computed: {
    storageData() {
      return this.$store.getters.getClients;
    }
  },
  methods: {
    delete() {}
  }
};
