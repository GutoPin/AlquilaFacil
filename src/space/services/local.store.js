import { reactive } from 'vue';

export const formStore = reactive({
    //id: local.id,
    district: '',
    street: '',
    localType: '',
    country: '',
    city: '',
    price: 0,
    photoUrl: '',
    descriptionMessage: '',
    localCategoryId: 0
});
