<template>
  <div class="clientes">
    <app-header></app-header>
    <div class="table">
      <div class="table-title">
        <br />
        <h2>Tabla de Clientes</h2>
        <button class="add" @click="showModal">
          <i class="fas fa-plus"></i> AGREGAR
        </button>
        <div v-show="isModalVisible" @close="closeModal">
          <transition name="modal-fade">
          <div class="modal-backdrop">
            <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
              <header class="modal-header" id="modalTitle">
                <slot name="header">
                  <h3>{{modalTitle}}</h3>
                  <button type="button" class="btn-close" @click="closeModal" aria-label="Close modal">x</button>
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
                      <button class='add-client' type='submit' v-html="submitButton"></button >
                    </form>
                  </div>
                </slot>
              </section>
            </div>
          </div>
          </transition>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th v-for="(title, index) in titles" :key="index">{{ title }}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in storageData" :key="i" scope="row">
            <td v-for="(cell, index) in row" :key="index">{{ cell }}</td>
            <td>
              <button class="button edit" @click.prevent="modifyClient(row.id)">
                <i class="fas fa-pen"></i>
              </button>
              <button class="button delete" @click.prevent="deleteClient(row.id)">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="./Clientes.js"></script>

<style lang="sass" src="./Clientes.sass" scoped></style>
