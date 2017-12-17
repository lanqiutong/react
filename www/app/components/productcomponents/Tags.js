import React, { Component } from 'react'
import { connect } from "dva";
import { Tag } from "antd";

class Tags extends Component {
    constructor(){
        super();
      
    }
    render() {


        return (
            <div>
                当前：
                {
                    this.props.filter.map((item, index) => {
                        return <Tag
                            key={index}
                            closable
                            // onClose={(e) => { e.preventDefault(); this.props.delTag(item.tagname) }}
                        >
                            {item.tagname}：{item.words}
                        </Tag>
                    })
                }

            </div>
        )
    }
}

export default connect(
    ({productall}) => ({
        "filter": productall.filter
    }),
    // (dispatch) => ({
        
        
    //     // delTag(tagname) {
    //     //     dispatch({ "type": "carpicker/deltag", tagname });
    //     // }
    // })
)(Tags);