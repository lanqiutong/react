import React, { Component } from 'react'
import { Row, Col } from 'antd';
import "../../styles/footer.less";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footertc">
            <div className="footertcpic">
               <Row>
                    <Col span={6}><span style={{backgroundImage:"url(../../images/qq.jpg)"}}><a herf="#"></a></span></Col>
                    <Col span={6}><span style={{ backgroundImage: "url(../../images/cd.jpg)" }}><a herf="#"></a></span></Col>
                    <Col span={6}><span style={{ backgroundImage: "url(../../images/qc.jpg)" }}><a herf="#"></a></span></Col>
                    <Col span={6}><span style={{ backgroundImage: "url(../../images/sf.jpg)" }}><a herf="#"></a></span></Col>
               </Row>
            </div>
        </div>
            <div className="footertxt" style={{ backgroundImage: "url(../../images/logo.jpg)" }} >
                <Row>
                    <Col span={5} >
                    <p className="tel">400-027-2891</p>
                    <p>周一至周日8:30-22:00</p>
                    </Col>
                    <Col span={13}>
                        <dl>
                            <dt>新手上路</dt>
                            <dd><a>用户注册</a></dd>
                            <dd><a>购物流程</a></dd>
                        </dl>
                        <dl>
                            <dt>配送与支付</dt>
                            <dd><a>在线支付</a></dd>
                            <dd><a>货到付款</a></dd>
                            <dd><a>配送范围</a></dd>
                            <dd><a>发票制度</a></dd>
                        </dl>
                        <dl>
                            <dt>市场合作</dt>
                            <dd><a>供应商合作</a></dd>
                            <dd><a>分销商合作</a></dd>
                            <dd><a>加盟合作</a></dd>
                        </dl>
                        <dl>
                            <dt>售后服务</dt>
                            <dd><a>零售业务保障</a></dd>
                            <dd><a>租摆业务保障</a></dd>
                            <dd><a>批发业务保障</a></dd>
                            <dd><a>投诉说明</a></dd>
                        </dl>
                    </Col>
                    <Col span={6}>
                        <div className="phone"><p>手机版</p><span style={{ backgroundImage: "url(../../images/foot_bottom.png)", backgroundPosition: "2px 0"}}></span></div>
                        <div className="offwechart"><p>官方微信</p><span style={{ backgroundImage: "url(../../images/foot_bottom.png)",backgroundPosition:"-80px 0"}}></span></div>
                    </Col>
                </Row>
        </div>
        <div className="footerbottom">
                <div className="kxwz" style={{ backgroundImage: "url(../../images/kxicon.jpg)" }} ></div>
                
                <div className="mzsm">
                <div className="cl"></div>
                    <ul>
                    <li><a herf="javascript:void(0)">免责条款</a></li>
                    <li><a herf="javascript:void(0)">隐私保护</a></li>
                    <li><a herf="javascript:void(0)">联系我们</a></li>
                    <li><a herf="javascript:void(0)">公司简介</a></li>
                </ul>
                <span>ICP备案证书号:&nbsp;&nbsp;<a herf="javascript:void(0)">鄂ICP备15021869号-1</a>&nbsp;&nbsp;<a herf="javascript:void(0)">58花木兰@2015</a></span>
                </div>
        </div>
      </div>
    )
  }
}
