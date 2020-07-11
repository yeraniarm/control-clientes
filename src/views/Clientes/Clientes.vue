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
        <app-modal v-show="isModalVisible" @close="closeModal"></app-modal>
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
              <button class="button edit"><i class="fas fa-pen"></i></button>
              <button class="button delete">
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
