import styled from "styled-components";

const Title = styled.h1`
    // theme에 설정된 색으로 변경
    color: ${(props) => props.theme.textColor};
`;

const Warpper = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.backgroundColor};
`;

function Theme() {
    return (
        <Warpper>
            <Title>Hello</Title>
        </Warpper>
    );
}

export default Theme;
