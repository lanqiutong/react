import React from "react";
import { routerRedux,Router, Route} from 'dva/router';
import Hompage from "./components/Homepage.js";
import Shopcar from "./components/Shopcar.js";
import ProductDetail from "./components/ProductDetail.js";
import Toubu from "./components/productcomponents/toubu.js";
import Footer from "./components/productcomponents/Footer.js";
import Productpicker from "./components/ProductPicker.js";
import Duorou from "./components/Duorou.js";
import Login from "./components/Login.js";
import Regist from "./components/Regist.js";
export default ({ history }) => {
    return <Router history={history}>
        <div>
            <div>
                <div><Toubu></Toubu></div>
                <Router history={history}>
                <div>
                        <Route path="/" exact component={Hompage} />
                        <Route path="/Productpicker"  component={Productpicker} />
                        <Route path="/duorou" component={Duorou} />   
                        <Route path="/shopcar" component={Shopcar} />
                        <Route path="/login" component={Login} />
                        <Route path="/regist" component={Regist} />
                        <Route path="/productDetail/:id" component={ProductDetail} />    
                </div>
                </Router >
                <div><Footer></Footer></div>
            </div>
        </div>
    </Router>
}