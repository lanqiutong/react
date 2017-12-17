import React, { Component } from 'react';
import { NavLink } from 'dva/router';
export default class Nav extends Component {
    constructor(){
        super();
        this.state={
            show:"none"
        }
    }
    componentDidMount(){
    
    }
    show(){  
        this.setState({
            show: "block"
        })
    }
    hide() {
        this.setState({
            show: "none"
        })
    }
  render() {
      return (
          <div className="productNav">
              <div className="cl"></div>
              <NavLink to="/productPicker"><div className="all" 
                  onMouseLeave={this.hide.bind(this)}
              >全部商品
              </div></NavLink>
              <ul>
                  <li className="cur"><NavLink to="/"><div>首页</div></NavLink></li>
                  <li> <NavLink to="/duorou"><div>多肉植物</div></NavLink></li>
                  <li>租赁租摆</li>
                  <li>批发专区</li>
                  <li>园艺工程</li>
                  <li>园艺课堂</li>
              </ul>
              <div className="cl"></div>
              {/* <div className="list"
                  
                  
              >
                  <dl style={{ backgroundImage: "url(./images/left_lm_a.png)", backgroundPosition: " 0 14px" }}
                      onMouseEnter={this.show.bind(this)}
                  >
                      <dt><a>鲜花</a></dt>
                      <dd><a>鲜花用途</a><a>鲜花花材</a></dd>
                  </dl>
                  <dl style={{ backgroundImage: "url(./images/left_lm_a.png)", backgroundPosition: " 0 -37px" }}>
                      <dt><a>绿色植物</a></dt>
                      <dd><a>绿植用途</a><a>绿植规格</a></dd>
                  </dl>
                  <dl style={{ backgroundImage: "url(./images/left_lm_a.png)", backgroundPosition: " 0 -93px" }}>
                      <dt><a>盆景/假山</a></dt>
                      <dd><a>盆景系列</a><a>假山系列</a></dd>
                  </dl>
                  <dl style={{ backgroundImage: "url(./images/left_lm_a.png)", backgroundPosition: " 0 -147px" }}>
                      <dt><a>庆典/婚庆</a></dt>
                      <dd><a>婚礼庆典</a><a>商业庆典</a></dd>
                  </dl>
                  <dl style={{ backgroundImage: "url(./images/left_lm_a.png)", backgroundPosition: " 0 -255px" }}>
                      <dt><a>时令花卉</a></dt>
                      <dd><a>单品花卉</a><a>组合花卉</a></dd>
                  </dl>
                  <dl style={{ backgroundImage: "url(./images/left_lm_a.png)", backgroundPosition: " 0 -308px" }}>
                      <dt><a>园艺辅材</a></dt>
                      <dd><a>花盆系列</a><a>花架系列</a></dd>
                  </dl>
              </div>
              <div className="detaillist flower" style={{ display: `${this.state.show}` }} >
                  <div className="detailtxt">
                      <dl>
                          <dd>鲜花用途</dd>
                          <dt>爱情鲜花</dt>
                          <dt>友情鲜花</dt>
                          <dt>生日鲜花</dt>
                          <dt>问候长辈</dt>
                          <dt>探病慰问</dt>
                      </dl>
                      <div className="cl"></div>
                      <dl>
                          <dd>鲜花花材</dd>
                          <dt>玫瑰</dt>
                          <dt>康乃馨</dt>
                          <dt>郁金香</dt>
                          <dt>百合</dt>
                          <dt>扶郎</dt>
                          <dt>马蹄莲</dt>
                          <dt>向日葵</dt>
                      </dl>
                      <div className="cl"></div>
                      <dl>
                          <dd>鲜花类别</dd>
                          <dt>花束</dt>
                          <dt>花盒</dt>
                          <dt>瓶花</dt>
                          <dt>精品鲜花</dt>
                          <dt>果篮</dt>
                            <dt>果篮</dt>
                      </dl>
                      <div className="cl"></div>
                      <dl>
                          <dd>永生花卉</dd>
                        <dt>经典花盒</dt>
                          <dt>巨型玫瑰</dt>
                          <dt>薰衣草</dt>
                          <dt>永生瓶花</dt>
                          
                      </dl>
                      <div className="cl"></div>
                  </div>
                  <img src="./images/navpic/1464370384907439861.jpg"/>
              </div>
              <div className="detaillist greenplant" style={{ display: `${this.state.show}` }} >
                  <div className="detailtxt">
                      <dl>
                          <dd>绿植用途</dd>
                          <dt>办公环境</dt>
                          <dt>庭院环境</dt>
                          <dt>公共环境</dt>
                          <dt>商业广场</dt>
                          <dt>路政环境</dt>
                      </dl>
                      <div className="cl"></div>
                      <dl>
                          <dd>绿植规格</dd>
                          <dt>水培盆栽</dt>
                          <dt>桌面盆栽</dt>
                          <dt>中型植物</dt>
                          <dt>大型植物</dt>
                          
                      </dl>
                      <div className="cl"></div>
                      <dl>
                          <dd>绿植功能</dd>
                          <dt>提神</dt>
                          <dt>美观</dt>
                          <dt>趣味</dt>                          
                          <dt>除甲醛</dt>
                          <dt>净化空气</dt>
                      </dl>
                      <div className="cl"></div>
                  </div>
                  <img src="./images/navpic/1464370384907439861.jpg" />
              </div>
              <div className="detaillist miniaturegarden" style={{ display: `${this.state.show}` }} >
                  <div className="detailtxt">
                      <dl>
                          <dd>盆景系列</dd>
                     </dl>
                      <div className="cl"></div>
                      <dl>
                          <dd>假山系列</dd>                       
                      </dl>                   
                      <div className="cl"></div>
                  </div>
                  <img src="./images/navpic/1464370190210187208.jpg" />
              </div>
              <div className="detaillist weddingcelebration" style={{ display: `${this.state.show}` }} >
                  <div className="detailtxt">
                      <dl>
                          <dd>婚庆庆典</dd>
                          <dt>婚庆鲜花</dt>
                          <dt>婚车扎花</dt>
                          <dt>婚庆用车</dt>

                      </dl>
                      <div className="cl"></div>
                      <dl>
                          <dd>商业庆典</dd>
                          <dt>开业花篮</dt>
                          <dt>会议鲜花</dt>
                          <dt>礼仪鲜花</dt>
                      </dl>
                      <div className="cl"></div>
                  </div>
                  <img src="./images/navpic/1464370212450385948.jpg" />
              </div>
              <div className="detaillist seasonflower" style={{ display: `${this.state.show}` }} >
                  <div className="detailtxt">
                      <dl>
                          <dd>组合花卉</dd>
                         

                      </dl>
                      <div className="cl"></div>
                      <dl>
                          <dd>单品花卉</dd>
                        
                      </dl>
                      <div className="cl"></div>
                  </div>
                  <img src="./images/navpic/1466812174766677762.jpg" />
              </div>
              <div className="detaillist gardeningauxiliarymaterial" style={{ display: `${this.state.show}` }} >
                  <div className="detailtxt">
                      <dl>
                          <dd>盆器系列</dd>
                        <dt>塑料花盆</dt>
                          <dt>陶瓷花盆</dt>
                          <dt>紫砂花盆</dt>
                          <dt>其他</dt>

                      </dl>
                      <div className="cl"></div>
                      <dl>
                          <dd>花架系列</dd>
                          <dt>铁艺花架</dt>
                          <dt>木艺花架</dt>

                      </dl>
                      <dl>
                          <dd>其他系列</dd>

                      </dl>
                      <div className="cl"></div>
                  </div>
                  <img src="./images/navpic/1464370290213809020.jpg" />
              </div> */}
          </div>
      )
  }
}
