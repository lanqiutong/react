
export default {
    "namespace": "productall",
    "state": {
        "products": "",
        "amount":0,
        "filter":[{"tagname":"类型","words":"鲜花"},{"tagname":"价格","words":"12-99"}]

    },
    "reducers": {
        init(state, { results, amount }) {
            return {
              ...state,
                "products": results,
                "amount":amount


            }

        }

    },
    "effects": {
        *fetchInit(action, { put }) {
            const { amount, results } = yield fetch(`/api`).then(data => data.json());
           
            yield put({ "type": "init", results,amount });
        }
    }
}