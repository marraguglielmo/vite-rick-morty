// importo reactive da vue
import {reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://rickandmortyapi.com/api/character',
    // importo anche l'api per chiedere tutti i personaggi
    nameUrl: 'https://rickandmortyapi.com/api/character',
    cardList:[],
    nameList:[],
    queryParams: {
        page: 1
    }
})
