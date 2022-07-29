import Calendar from 'react-calendar';
import React, { useEffect, useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import { FlexDiv } from '../components/presenter/customAntd';
import styled from 'styled-components';

const CalenderContainer = styled.div`
    .react-calendar{
        border: 0px solid #a0a096;    }
`

function ChoiceDate() {
    const [value, onChange] = useState(new Date());

    useEffect(() => {
        console.log(value);
    }, [value])
    
    return (
        <FlexDiv>
            <CalenderContainer>
                <Calendar onChange={onChange} value={value} locale="en-GB" onClickDay={(value, event) => alert(value)}/>
            </CalenderContainer>
        </FlexDiv>
    )
}

export default ChoiceDate;