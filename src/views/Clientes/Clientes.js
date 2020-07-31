import Header from "../../components/Header.vue";
import Modal from "../../components/Modal.vue";

export default {
  created() {
    this.$store.dispatch("fetchClient");
  },
  components: {
    "app-header": Header,
    "app-modal": Modal
  },
  data() {
    return {
      titles: ["Id", "Nombre", "RFC", "Teléfono"],
      isModalVisible: false
    };
  },
  computed: {
    storageData () {
      return this.$store.getters.getClients;
    }
  },
  methods: {
    showModal () {
      this.isModalVisible = true;
    },
    closeModal () {
      this.isModalVisible = false;
    }, 
    deleteClient (index) {
      console.log(index);
      this.$store.dispatch("deleteClient", index);
    }
  }
};
