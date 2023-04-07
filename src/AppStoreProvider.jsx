import React from 'react';
import {Provider} from "react-redux";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import {store} from "./store";
const persistor = persistStore(store);
const AppStoreProvider = (props) => {
    return (
            <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        {props.children}
                    </PersistGate>
            </Provider>
    );
};
export default AppStoreProvider;