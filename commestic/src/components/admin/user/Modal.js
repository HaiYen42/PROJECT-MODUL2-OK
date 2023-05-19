import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useEffect, useState } from 'react';
import { getUser, getUserId, putUser } from '../../../services/userService';

const Modal = (props) => {
    const [open, setOpen] = useState(false);
    const [user, setUser]= useState("");
    const [newValue, setNewValue]= useState({});
  const showDrawer = () => {
    setOpen(true);
  };
   useEffect(() => {
    getUserId(props.id).then((res) => {
        setUser(res.data)
    })
   },[])

  const onClose = () => {
    setOpen(false);
  };
  const handleSubmit=()=>{
    setOpen(false);
    putUser(props.id, newValue);
    props.render(newValue);
  }
 const handleChange=(e)=>{
    let  name=e.target.id;
    let  value =e.target.value
    setNewValue({...newValue,[name]:value})
    }
  return (
    <>
      <Button type="primary" onClick={showDrawer} >
        Edit
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" 
         initialValues={user}
         onChange={handleChange}
         >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
              
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="age"
                label="Age"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your age',
                  },
                ]}
              >
                  <Input placeholder="Please enter your age" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your email',
                  },
                ]}
              >
              <Input placeholder="Please enter your email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your address',
                  },
                ]}
              >
                <Input placeholder="Please enter your address" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Phone"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your phone',
                  },
                ]}
              >
                <Input placeholder="Please enter your phone" />
              </Form.Item>
            </Col>
           
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Note"
                rules={[
                  {
                    required: true,
                    message: 'please enter the note',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter the note" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default Modal;