export default {
    "namespace": "productdetail",
    "state": {
        "product":"",
    },
    "reducers": {
        init(state, results) {
            return {
                "product": results

            }

        }

    },
    "effects": {
        *fetchInit(action, { put }) {
        
            const { amount, results } = yield fetch(`/api?id=${action.id}`).then(data => data.json());
           
            yield put({ "type": "init", results });
        }
       
    }
}