import { UserOutlined } from '@ant-design/icons';
import '../css/antd.css'
import { CustomForm, CustomButton, FlexDiv, Form, Input } from '../components/presenter/customAntd';
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/atom';
import { useNavigate } from "react-router-dom";

function Login() {
    let navigate = useNavigate();
    const [user, setUser] = useRecoilState(userState);

    const onFinish = (value: any) => {
        console.log('Received values of form: ', value.username);
        setUser(value.username);

        navigate("/choiceDate");
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