import {Col, Row} from "antd";
import React from "react";
import RoomList from "./RoomList";
import UserInfo from "./UserInfo";
import styled from 'styled-components'

const SidebarStyle = styled.div`
     background: #0a090a;
     color: white;
     height: 100vh;
`;
function Sidebar(){
    return <div>
        <SidebarStyle>
        <Row>
            <Col span={24}>
                <UserInfo/>
            </Col>
            <Col span={24}>
                <RoomList/>
            </Col>
        </Row>
        </SidebarStyle>
    </div>
}
export default Sidebar