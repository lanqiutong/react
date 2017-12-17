export default {
    "namespace": "productdetail",
    "state": {
        "product":"",
    },
    "reducers": {
        init(state, item) {
            return {
                "product": item

            }

        }

    },
    "effects": {
        *fetchInit(action, { put }) {
           
            if(action.id){
            const { amount, results } = yield fetch(`/api/${aciton.id}`).then(data => data.json());
           
            yield put({ "type": "init", results });
        }
        }
    }
}