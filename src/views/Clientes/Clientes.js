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
      titles: ["Id", "Nombre", "RFC", "Teléfono"],
      isModalVisible: false,
      nombre: "",
      rfc: "",
      telefono: "",
      ciudad: "",
      domicilio: "",
      colonia: "",
      codigoPostal: "",
      correo: "",
      modalTitle: "",
      addClientButton: ""
    };
  },
  computed: {
    storageData() {
      return this.$store.getters.getClients;
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
      this.modalTitle = "Datos";
      this.addClientButton = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.nombre = "";
      this.rfc = "";
      this.telefono = "";
      this.ciudad = "";
      this.domicilio = "";
      this.colonia = "";
      this.codigoPostal = "";
      this.correo = "";
    },
    addClient() {
      let clientData = {
        nombre: this.nombre,
        rfc: this.rfc,
        telefono: this.telefono,
        ciudad: this.ciudad,
        domicilio: this.domicilio,
        colonia: this.colonia,
        codigoPostal: this.codigoPostal,
        correo: this.correo
      };
      this.$store.dispatch("storeClient", clientData);
    },
    modifyClient(index) {
      this.isModalVisible = true;
      this.addClientButton = false;
      this.modalTitle = "Editar datos";
      const clientes = this.$store.getters.getClient.filter(
        cliente => cliente._id == index
      );
      this.nombre = clientes[0].nombre;
      this.rfc = clientes[0].rfc;
      this.telefono = clientes[0].telefono;
      this.ciudad = clientes[0].ciudad;
      this.domicilio = clientes[0].domicilio;
      this.colonia = clientes[0].colonia;
      this.codigoPostal = clientes[0].codigoPostal;
      this.correo = clientes[0].correo;
      localStorage.setItem("clientId", index);
    },
    updateClient() {
      let data = {
        nombre: this.nombre,
        rfc: this.rfc,
        telefono: this.telefono,
        ciudad: this.ciudad,
        domicilio: this.domicilio,
        colonia: this.colonia,
        codigoPostal: this.codigoPostal,
        correo: this.correo
      };
      this.$store.dispatch("updateClient", data);
    },
    deleteClient(index) {
      this.$store.dispatch("deleteClient", index);
    }
  }
};
