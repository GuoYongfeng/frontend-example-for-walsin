import React from 'react'
import mirror, { actions } from 'mirrorx';
import * as api from './service'
import { processData } from 'utils/index.js'

export default {
    name: 'detail',
    initialState: {
        code: "222",
        name: "walsin",
        info: {}
    },
    reducers: {
        /**
         * 纯函数，相当于 Redux 中的 Reducer，只负责对数据的更新。
         * @param {*} state
         * @param {*} data
         */
        updateState(state, data) { //更新state
            return {
                ...state,
                ...data
            };
        }
    },
    effects: {
        /**
         * 加载列表数据
         * @param {*} param
         * @param {*} getState
         */
        async loadCorpInfo(param = {}, getState) {
            console.log(processData)
            // 调用 getList 请求数据
            let res = await api.getDetail();
            
            if (res) {
                actions.detail.updateState({
                    info: res.data.data
                });
            }
        }
    }
}
