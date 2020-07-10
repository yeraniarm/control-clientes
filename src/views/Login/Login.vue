<template>
  <div class="login">
    <link
      href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <div class="login-logo">
      <img src="../../img/logogrande.png" alt="logo grande" class="image" />
    </div>
    <div class="login-form">
      <form @submit.prevent="onSubmit">
        <div class="login-form-input">
          <label for="user">Usuario:</label>
          <input type="text" v-model="user" :placeholder="userIcon" required />
        </div>
        <div class="login-form-input">
          <label for="password">Contraseña</label>
          <input
            type="password"
            v-model="password"
            :placeholder="passIcon"
            required
          />
        </div>
        <button class="submit" type="submit">Iniciar sesión</button>
      </form>
    </div>
  </div>
</template>

<script src="./Login.js"></script>

<style lang="sass" src="./Login.sass" scoped></style>
