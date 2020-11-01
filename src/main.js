import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { Provider } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import stores from '~s';

stores.products.load().then(() => {
    ReactDom.render(
        <Provider stores={stores}>
            <App />
        </Provider>,
        document.querySelector('#app'));

        stores.notifications.add('lohPidar')
        stores.notifications.add('lohPidarTi')
        stores.notifications.add('lohPidarJa')
})

stores.cart.load()