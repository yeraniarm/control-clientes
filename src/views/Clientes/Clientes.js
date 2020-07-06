import Header from '../../components/Header.vue';

export default {
    created() {
        this.$store.dispatch('fetchClient');
    },
    components: {
        'app-header': Header
    },
    data() {
        return {
            titles: ['Id', 'Nombre', 'RFC', 'Teléfono']
            /* storageData: [{
                id: '1', 
                nombre: 'Yerania Lizbeth Rivera María', 
                RFC: 'aaaaaaaaaaaaaaa',
                telefono: '3121541427'
            }, 
            {
                id: '1', 
                nombre: 'Yerania Lizbeth Rivera María', 
                RFC: 'aaaaaaaaaaaaaaa',
                telefono: '3121541427'
            }, 
            {
                id: '1', 
                nombre: 'Yerania Lizbeth Rivera María', 
                RFC: 'aaaaaaaaaaaaaaa',
                telefono: '3121541427'
            },{
                id: '1', 
                nombre: 'Yerania ', 
                RFC: 'aaaaaa',
                telefono: '3121541427'
            },{
                id: '1', 
                nombre: 'Yerania ', 
                RFC: 'aaaaa',
                telefono: '3121541427'
            },
            {
                id: '1', 
                nombre: 'Yerania ', 
                RFC: 'aaaaa',
                telefono: '3121541427'
            }] */
        }
    }, 
    computed: {
        storageData () {
            return this.$store.getters.getClients;
        }
    },
    methods: {
        delete() {

        }
    }
}