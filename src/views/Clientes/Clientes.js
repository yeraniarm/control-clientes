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
      submitButton: `<span @click="addClient"></span>Agregar cliente`
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
      this.submitButton =  `<span @click="addClient"></span>Agregar cliente`;
    },
    closeModal() {
      this.isModalVisible = false;
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
      console.log(clientData);
      this.$store.dispatch("storeClient", clientData);
    },
    modifyClient(index) {
      this.showModal();
      this.modalTitle = "Editar datos";
      const clientes = this.$store.getters.getClient.filter(cliente => cliente._id == index);
      console.log(clientes[0]._id);
      this.nombre = clientes[0].nombre;
      this.rfc = clientes[0].rfc;
      this.telefono = clientes[0].telefono;
      this.ciudad = clientes[0].ciudad;
      this.domicilio = clientes[0].domicilio;
      this.colonia = clientes[0].colonia;
      this.codigoPostal = clientes[0].codigoPostal;
      this.correo = clientes[0].correo;
      this.submitButton = `<span @click="updateClient(${index})"></span>Actualizar cliente`;
    },
    updateClient(index) {
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
      console.log(clientData);
      console.log(index);
      this.$store.dispatch("updateClient",index,clientData);
    },
    deleteClient(index) {
      console.log(index);
      this.$store.dispatch("deleteClient", index);
    }
  }
};
