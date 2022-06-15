import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import '../css/antd.css'
import styled from "styled-components"


const CustomForm = styled(Form)`
    width:300px;
`

const FlexDiv = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

const CustomButton = styled(Button)`
    width:100%;
`

function Login() {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <FlexDiv>
            <CustomForm
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <CustomButton type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </CustomButton>
                </Form.Item>
            </CustomForm>
        </FlexDiv>
    )
}

export default Login