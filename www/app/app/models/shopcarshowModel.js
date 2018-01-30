export default {
    "namespace":"shopcarshow",
    "state":{
        "shopcar":[],
        "state":1
    },
    "reducers":{
        add(state,{data}){
             return {
               "shopcar":data
             }
        
        },
        init(state,{results}){
            return {
                "shopcar":results
            }
        },
        delshop(state,{data}){
           
            return{
                "shopcar": data
            }
        }
        
        
    },
    "effects":{
        *addshopcar({item},{put}){ 
             const data = yield fetch("/shopcar", {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            }).then(res => res.json()); 
           
            yield put({ "type": "add", data}); 
        },
        *fetchInit(action,{put}){
            const {amount,results} = yield fetch("/shopcar").then(res=>res.json());
            yield put({"type":"init",results})
        },
        *del({item},{put}){
            
          const data = yield fetch(`/shopcar/${item.id}`).then(res => res.json());
         
          yield put({ "type": "delshop", data}); 
        },
        *change({item},{put}){
            const data = yield fetch("/shopcar",{
                "method":"PATCH",
                "headers": {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            }).then(res => res.json());
            yield put({ "type": "add", data });

        }
       
    }
}