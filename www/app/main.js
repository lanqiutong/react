import React from "react";
import dva from "dva";
import router from "./router"
import {createLogger} from "redux-logger";
import productshowModel from "./models/productshowModel";
import shopcarshowModel from "./models/shopcarshowModel";
import productdetailModel from "./models/productdetailModel";
import productallModel from "./models/productallModel";
import loginModel from "./models/loginModel";

const app = dva({
    onAction: createLogger()
});
app.model(productshowModel);
app.model(shopcarshowModel);
app.model(productdetailModel);
app.model(productallModel);
app.model(loginModel);
app.router(router);
app.start("#app-container");