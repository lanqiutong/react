export default {
    "namespace":"productshow",
    "state":{
        "products":"",
        
    },
    "reducers":{
        init(state,{results}){
            return {
                ...state,
                "products":results,
               
             
            }

        }
        
    },
    "effects":{
        *fetchInit(action,{put}){
          
            const {amount,results} = yield fetch(`/api`).then(data => data.json());
          
            yield put({ "type": "init", results});
        }
       
       
    }
}