import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.backgroundColor};
`;

const rotationAnimation = keyframes`
    0%{
        transform: rotate(0deg);
        border-radius: 0px;
    }
    50%{
        transform: rotate(180deg);
        border-radius: 100px;
    }
    100%{
        transform: rotate(360deg);
        border-radius: 0px;
    }
`;

const Emoji = styled.span`
    font-size: 500%;
`;

const Box = styled.div`
    height: 200px;
    width: 200px;
    background-color: wheat;
    animation: ${rotationAnimation} 1.2s linear infinite;

    display: flex;
    justify-content: center;
    align-items: center;

    // Box 컴포넌트 안에 있는 span을 직접 설정할 수 있다
    // span{} 으로 할 경우 span만 적용된다
    // 따라서 div같은 태그가 다를 경우를 대비해 컴포넌트를 넣어준다
    // Box안의 Emoji 컴포넌트만 애니메이션이 적용된다

    ${Emoji} {
        // span:hover => &:hover 대체 가능
        &:hover {
            font-size: 700%;
        }
        &:active {
            opacity: 0;
        }
    }
`;

function Animation() {
    return (
        <Wrapper>
            <Box>
                <Emoji as="a">🤔</Emoji>
            </Box>
            <Emoji>🤔</Emoji>
        </Wrapper>
    );
}

export default Animation;
