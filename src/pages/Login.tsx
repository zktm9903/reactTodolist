import { UserOutlined } from '@ant-design/icons';
import '../css/antd.css'
import { CustomForm, CustomButton, FlexDiv, Form, Input } from '../components/presenter/loginForm';
import { useRecoilState } from 'recoil';
import { todoListState, userState } from '../recoil/atom';
import { useState } from 'react';
import { useRecoilTransactionObserver_UNSTABLE, useGotoRecoilSnapshot } from 'recoil';

function Login() {
    const [snapshots, setSnapshots] = useState<any>([]);

    useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
        setSnapshots([...snapshots, snapshot]);
    });

    const gotoSnapshot = useGotoRecoilSnapshot();

    const [user, setUser] = useRecoilState(userState);
    const [todolist, setTodolist] = useRecoilState(todoListState);

    const onFinish = (value: any) => {
        console.log('Received values of form: ', value.username);

        if (user.includes(value.username) === false)
            setUser(user.concat(value.username));

        setTodolist({ ...todolist, userIndex: user.indexOf(value.username) });

        gotoSnapshot(snapshots);
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