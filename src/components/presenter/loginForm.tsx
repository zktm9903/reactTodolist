import styled from "styled-components";
import { Button, Form, Input } from 'antd';

const FlexDiv = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

const CustomForm = styled(Form)`
    width:300px;
`

const CustomButton = styled(Button)`
    width:100%;
`

export { CustomForm, FlexDiv, CustomButton, Button, Form, Input }