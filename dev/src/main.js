import { createApp } from 'vue';
import App from './App.vue';

import Geometr from '@';

const application = createApp(App);

application.use(Geometr);

application.mount('#app');
