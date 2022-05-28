import React from "react";
import ChatWindown from "./ChatWindown";
import Sidebar from "./Sidebar";
import {Col, Row} from "antd";

function ChatRoom (){
    return(
        <div>
           <Row>
               <Col span={6}>
                   <Sidebar/>
               </Col>
               <Col span={18}>
                   <ChatWindown/>
               </Col>
           </Row>
        </div>
    )
}
export default ChatRoom