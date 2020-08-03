<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <h3>Datos</h3>
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <div class="client-form">
              <form @submit="addClient">
                <div class="client-form-input required">
                  <label for="name">Nombre</label>
                  <input type="text" v-model="nombre" required />
                </div>
                <div class="client-form-input required">
                  <label for="rfc">RFC</label>
                  <input type="text" v-model="rfc" required />
                </div>
                <div class="client-form-input required">
                  <label for="tel">Teléfono</label>
                  <input type="text" v-model="telefono" required />
                </div>
                <div class="client-form-input">
                  <label for="city">Ciudad</label>
                  <input type="text" v-model="ciudad" />
                </div>
                <div class="client-form-input">
                  <label for="address">Domicilio</label>
                  <input type="text" v-model="domicilio" />
                </div>
                <div class="client-form-input">
                  <label for="col">Colonia</label>
                  <input type="text" v-model="colonia" />
                </div>
                <div class="client-form-input">
                  <label for="cp">Código Postal</label>
                  <input type="text" v-model="codigoPostal" />
                </div>
                <div class="client-form-input required">
                  <label for="email">Correo</label>
                  <input type="email" v-model="correo" required />
                </div>
                <button class="add-client" type="submit" @click="addClient">
                  Agregar cliente
                </button>
              </form>
            </div>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal", 
  methods: {
    close() {
      this.$emit("close");
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
    }
  },
  data() {
    return {
      nombre: "",
      rfc: "",
      telefono: "",
      ciudad: "",
      domicilio: "",
      colonia: "",
      codigoPostal: "",
      correo: ""
    };
  }
};
</script>

<style lang="sass">
@mixin flex-box-center
    display: flex;
    align-items: center;
    flex-direction: column;

.required label::after
  content: "*";
  color: red;

.modal-backdrop
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

.modal
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    height: 80%;
    overflow-y: auto;

.modal-header
    border-bottom: 1px solid #eeeeee;
    padding-left: 50px;
    display: flex;
    justify-content: space-between;

.modal-body
    position: relative;
    padding: 20px;

.btn-close
    border: none;
    font-size: 20px;
    padding: 10px;
    padding-right: 40px;
    cursor: pointer;
    font-weight: bold;
    background: transparent;
    float: right;
    color: gray;

.btn-close:hover,
.btn-close:active
    color: black;

.client-form
    @include flex-box-center;
    width: 460px;
    border-radius: 5px;
    background: #fff;

.client-form-input
    width: 399px;

input
    font-style: normal;
    text-decoration: inherit;
    text-align: left;
    width: 399px;
    height: 40px;
    border-radius: 5px;
    background: #fff;
    border: 1px solid #dadee3;
    color: #737373;
    margin: 10px auto;

.add-client
    width: 132px;
    height: 39px;
    background: #5580e9;
    border: 1px solid #84ceeb;
    color: #fff;
    float: right;
    margin-top: 30px;
    font-weight: normal;
    font-size: 16px;
    font-family: FontAwesome, "Work Sans", sans-serif;
    cursor: pointer;

.add-client:hover
    background: #80A5FF;

.add-client:active
    background: #3B68D5;

@media only screen and (max-width: 600px)
    .client-form, .client-form-input, .add-client, input
        width: 100%;

    .modal-header
        padding-left: 20px;

    .btn-close
        padding-right: 20px;

    .modal
        height: 80%;
</style>
