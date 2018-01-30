export default {
    "namespace": "productall",
    "state": {
        "products": "",
        "amount":0,
        "page": 1,
        "pagesize": 20,
        "filter":[]

    },
    "reducers": {
        init(state, { results, amount }) {
            return {
              ...state,
                "products": results,
                "amount":amount


            }

        },
        addTag(state, payload) {
            var isEixt = false; // 是否存在
            state.filter.forEach((item) => {
                if (item.tagname == payload.tagname) isEixt = true;
            });
            if (!isEixt) {
                return {
                    ...state,
                    "filter": [
                        ...state.filter,
                        { "tagname": payload.tagname, "words": payload.words }
                    ],
                    "page":1
                }
            }else{
                return {
                   ...state,
                   "filter":state.filter.map((item)=>{
                       if(item.tagname == payload.tagname){
                           return { "tagname": payload.tagname, "words": payload.words }
                       }else{
                           return item;
                       }

                   }) ,
                    "page": 1          
                }
            }
        },
        delTag(state,payload){
            return{
                ...state,
                "filter":state.filter.filter((item)=>{
                    return item.words != payload.words;
                }),
                "page": 1
            }
        },
        changeResult_sync(state,payload){
            return {
                ...state,
                "products":payload.results,
                "amount":payload.amount
            }
        },
        changePage(state,paload){
            return{
                ...state,
                "page":paload.page
            }
        }
    },
    "effects": {
        *fetchInit(action, { put,select }) {
            const { page, pagesize } = yield select(state => state.productall);
            const { results, amount } = yield fetch(`/api?page=${page}&pagesize=${pagesize}`).then(data => data.json());
            yield put({ "type": "changeResult_sync", results, amount });
        },
        *addtag_asyn({tagname,words},{put ,select}){ 
         
            const filter = yield select(state => state.productall.filter); 
            const { page, pagesize } = yield select(state => state.productall);
      
            var queryobj = {
                page: 1,
                pagesize,
            }
            filter.forEach((item) => {
                //根据你的action的tagname，加查询对象的键
                addQueryobjKey(item.tagname, item.words, queryobj)
            });
            addQueryobjKey(tagname, words, queryobj);
            var querystring = (function () {
                var arr = [];
                for (var k in queryobj) {
                    arr.push(k + "=" + queryobj[k]);
                }
                return arr.join("&");
            })();
        
           
            const { amount, results } = yield fetch("/api?" + querystring).then(data => data.json());
            yield put({ "type": "addTag", tagname, words });
        
            yield put({ "type": "changeResult_sync", results, amount });
        },
        *deltag_asyn({ tagname, words }, { put, select }) {
       
            const filter = yield select(state => state.productall.filter);
            const { page, pagesize } = yield select(state => state.productall);

            var queryobj = {
                page: 1,
                pagesize
            }
            filter.forEach((item) => {
                if (item.tagname != tagname) {
                    addQueryobjKey(item.tagname, item.words, queryobj)
                }
            });

            var querystring = (function () {
                var arr = [];
                for (var k in queryobj) {
                    arr.push(k + "=" + queryobj[k]);
                }
                return arr.join("&");
            })();
            
            const { amount, results } = yield fetch("/api?" + querystring).then(data => data.json());
            yield put({ "type": "delTag", tagname, words });
            
            yield put({ "type": "changeResult_sync", results, amount });
        },
        *changepage({page},{put,select}){
            const filter = yield select(state => state.productall.filter);
            const {pagesize } = yield select(state => state.productall);
            var queryobj = {
                page: page,
                pagesize
            };
            filter.forEach((item) => {
                    addQueryobjKey(item.tagname, item.words, queryobj) 
            });
            var querystring = (function () {
                var arr = [];
                for (var k in queryobj) {
                    arr.push(k + "=" + queryobj[k]);
                }
                return arr.join("&");
            })();
          
            const { amount, results } = yield fetch("/api?" + querystring).then(data => data.json());
            yield put({ "type": "changePage", page});
            yield put({ "type": "changeResult_sync", results, amount });

        }
    }
    

}
//根据tagname弄出一个queryobj对象
function addQueryobjKey(tagname,words,queryobj) {
    if (tagname == "类型") {
        queryobj["typech"] = words;
    }
    if (tagname == "商品名") {
        queryobj["name"] = words;
    }
    if (tagname == "价格") {
         var arr=words.split(/\-/)
        queryobj["price"] = arr;
    }

  
}