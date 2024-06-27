import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import Sidebar from "primevue/sidebar";
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox'
import Card from "primevue/card";
import Toast from "primevue/toast";
import  SplitButton  from 'primevue/splitbutton';

import i18n from "./locale/i18n.js";


import 'primeflex/primeflex.css';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'
import Divider from "primevue/divider";
import AutoComplete from "primevue/autocomplete";
import router from "./router/index.js";
import DialogService from "primevue/dialogservice";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";
import {createPinia} from "pinia";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(PrimeVue);
app.use(router)
app.use(DialogService)
app.use(ConfirmationService)
app.use(ToastService)
app.component('pv-button', Button);
app.component('pv-toolbar', Toolbar);
app.component('pv-card', Card);
app.component('pv-checkbox', Checkbox);
app.component('pv-password', Password);
app.component('pv-iconfield', IconField);
app.component('pv-inputicon', InputIcon);
app.component('pv-inputtext', InputText);
app.component('pv-card', Card);
app.component('pv-toast', Toast);
app.component('pv-sidebar', Sidebar);
app.component('pv-divider', Divider);
app.component('pv-autocomplete', AutoComplete);
app.component('pv-splitbutton', SplitButton);

app.use(i18n);

app.mount('#app')