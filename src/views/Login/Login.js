import CryptoJS from 'crypto-js';

export default {
    data() {
        return {
            user: '', 
            password: '',
            userIcon: '\uf2bd  Usuario',
            passIcon: '\uf023  Contraseña'
        }
    }, 
    methods: {
        onSubmit () {
            const formData = {
                user: this.user, 
                password: this.password
            }
            console.log(formData);
            let pass = CryptoJS.MD5(formData.password).toString();
            this.$store.dispatch('login', { user: formData.user, pass });
        }
    }
}