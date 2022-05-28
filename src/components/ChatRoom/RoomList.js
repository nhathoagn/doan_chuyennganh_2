import {Button, Collapse, Typography} from "antd";
import React, {useContext, useMemo} from "react";
import styled from 'styled-components'
import {PlusSquareOutlined} from "@ant-design/icons";
import useFirestore from "../Hooks/useFirestore";
import AuthProvider, {AuthContext} from "../Context/AuthProvider";
import {AppContext} from "../Context/AppProvider";
const {Panel} = Collapse;
const PannelStyle = styled(Panel)`
  
&&& {
    .ant-collapse-header,
    p{
        color: white;
    }
    .ant-collapse-content-box{
        padding: 0 40px;
    }
  .add-room{
    color: white;
    padding: 0;
  }
  
}
`;
const LinkStyled  = styled(Typography.Link)`
display: block;
  margin-bottom: 5px;
  color: white;
`
function RoomList(){

    const { rooms, setIsAddRoomVisible, setSelectedRoomId } =
        React.useContext(AppContext);

    const handleAddRoom = () => {
        setIsAddRoomVisible(true);
    };

    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PannelStyle header="Danh sách các phòng" key='1'>
                {
                    rooms.map(room =>(
                        <LinkStyled key={room.id} onClick={ () => setSelectedRoomId(room.id)}>
                        {room.name}
                    </LinkStyled>))
                }

                <Button type='text' icon={<PlusSquareOutlined/>} className="add-room" onClick={handleAddRoom}>
                    Thêm Phòng
                </Button>
            </PannelStyle>
        </Collapse>
    )
}
export default RoomList