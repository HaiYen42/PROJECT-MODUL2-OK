import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useState } from 'react';
import {toast,ToastContainer } from 'react-toastify';


import { getProduct, getProductId, postProduct } from '../../../services/productService';
import UploadImage from './UploadImage';
const { Option } = Select;
const AddProduct = (props) => {
  const [open, setOpen] = useState(false);
  const [newValue, setNewValue] = useState({
    name: "",
    price: "",
    quantity: "",
    stock: "",
    image: "",
    title: "",
    description: "",
    code: ""
  })
  const [valueInput, setValueInput] = useState({})
  const [image, setImage] = useState("");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    let name = e.target.id;
    let value = e.target.value;
    setNewValue({ ...newValue, [name]: value })

  }

  // Get Image
  const getImageInfo =(image)=>{
    setNewValue({...newValue,image:image})
  }

  const handleSubmit = () => {
    delete newValue[""]
    console.log(newValue);
    setOpen(false);
    postProduct(newValue)
    props.render("Long");
    toast.success("Add Successful !")
  }
  return (
    <>
        <ToastContainer />
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add Product
      </Button>
      <Drawer
        title="Thêm sản phẩm mới "
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleSubmit} type="primary" >
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical"
          onChange={handleChange}
          value={valueInput}
          initialValues={{}}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Tên sản phẩm"
                rules={[
                  {
                    required: true,
                    message: 'Please enter product name',
                  },
                ]}
              >
                <Input placeholder="Please enter product name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="code"
                label="Mã sản phẩm"
                rules={[
                  {
                    required: true,
                    message: 'Please enter product ID',
                  },
                ]}
              >
                <Input placeholder="Please enter product ID" />
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
                    message: 'Please enter product price',
                  },
                ]}
              >
                <Input placeholder="Please enter product price" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="brand"
                label="Thương hiệu"
                rules={[
                  {
                    required: true,
                    message: 'Please enter product brand',
                  },
                ]}
              >
                <Input placeholder="Please enter product brand" />
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
                    message: 'Please enter product stock',
                  },
                ]}
              >
                <Input placeholder="Please enter product stock" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <UploadImage getImageInfo={getImageInfo} product={{image:""}}/>
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
export default AddProduct;