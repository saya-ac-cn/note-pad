import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import "antd/dist/reset.css"
import { Provider } from 'react-redux'
import { store, persistor } from "@/redux"
import { PersistGate } from 'redux-persist/integration/react'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store} locale={zhCN}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)