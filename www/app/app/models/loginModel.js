export default {
    "namespace": "login",
    "state": {
        "username": "",
        "islogin":false,
        "isregist":false
        
    },
    "reducers": {
        regist_asny(state, {isregist}){  
               return{
                   ...state,                 
                   "isregist": isregist 
                  
            }
        },
        login_asny(state, {username}){
            return{
                ...state,
                "username": username,
                "islogin": true
            }
        }

    },
    "effects": {
        *check({k,v},{put}){
            
            const {result}= yield fetch("/regist", {
                "method": "CHECKOUT",
                "headers": {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({k,v})
            }).then(res => res.json());
            if (result==1)alert(k+"被占用");         
        },
        *regist(action,{put}){
            //console.log(action.obj)
            const { result } = yield fetch("/regist", {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(action.obj)
            }).then(res => res.json());
            if(result==-1){
                alert("错误，请重新注册")
            }else if(result==-2){
                alert("用户名被占用")
            }else if(result==-3){
                alert("邮箱已被注册")
            }else if(result==-4){
                alert("电话已被注册")
            }else if(result==1){
                var isregist=true;
                yield put({ "type": "regist_asny",isregist })
            }

        },
        *login(action,{put}){
            const {result} = yield fetch("/login", {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(action.obj)
            }).then(res => res.json());  
            if(result==1){
                var username=action.obj.username;
                sessionStorage.setItem('username', username);
                yield put({ "type": "login_asny",username});
                
            }else{
                alert("用户名或密码错误")
            }

        }

    }
}