import { Button, Col, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useState, useEffect } from 'react';
import { getProductId } from '../../../services/productService';
import UploadImage from './UploadImage';
const { Option } = Select;
const ViewProduct = (props) => {
    // console.log("props.id", props.id);
  const [open, setOpen] = useState(false);
  const [product, setProduct]= useState("");
  const [newValue, setNewValue]= useState({
    name: "",
    price: "",
    quantity: "",
    stock: "",
    image: "",
    title: "",
    description: "",
    code: ""
  })

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    getProductId(props.id).then((res)=>{
        setProduct(res.data)
    })
  },[])

// Get Image
  const getImageInfo= (image)=>{
    setNewValue({...newValue, image:image})
  }

  return (
    <>
      <Button type="primary" ghost  onClick={showDrawer}>
                  Xem{" "}
                </Button>
      <Drawer
        title="Chi tiết sản phẩm"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
            <Button onClick={onClose}>Cancel</Button>
        }
      >
        <Form layout="vertical" hideRequiredMark
        initialValues={product}
        disabled>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Tên sản phẩm"
                rules={[
                  {
                    required: true,
                   
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="code"
                label="Mã sản phẩm"
                rules={[
                  {
                    required: true,
                   
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
          <Col span={12}>
              <Form.Item
                name="price"
                label="Đơn giá"
                rules={[
                  {
                    required: true,
                    
                  },
                ]}
              >
                <Input  />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="brand"
                label="Thương hiệu"
                rules={[
                  {
                    required: true,
                  
                  },
                ]}
              >
                <Input  />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
          <Col span={12}>
              <Form.Item
                name="stocks"
                label="Hàng tồn kho"
                rules={[
                  {
                    required: true,
                   
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <UploadImage getImageInfo={getImageInfo} product={product}/>
              {/* <input name="image" type="file" accept='image/' onChange={(e) => readURL(e)} /> */}
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="title"
                label="Tiêu đề"
                rules={[
                  {
                    required: true,
                    message: 'Please enter product title',
                  },
                ]}
              >
                <Input placeholder="Please enter product title" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="descrip"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter product description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Please enter product description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default ViewProduct;