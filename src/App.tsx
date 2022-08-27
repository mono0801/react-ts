import styled from "styled-components";

const Father = styled.div`
    display: flex;
    padding-top: 7.5px;
    padding-bottom: 7.5px;

    background-color: ${(props) => props.theme.backgroundColor};
`;

const Box = styled.div`
    // ${(props) => props.bgColor}을 통해 컴포넌트에서 설정한 prop을 가져옴
    background-color: ${(props) => props.bgColor};
    width: 100px;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

// Box의 css를 상속받아 확장함
const Circle = styled(Box)`
    border-radius: 50%;
`;

const Text = styled.span`
    color: white;
`;

const Btn = styled.button`
    color: white;
    background-color: ${(props) => props.bgColor};
    border: 0;
    border-radius: 15px;
`;

// attrs을 사용하면 설정한 속성을 default로 할당할 수 있다
const Input = styled.input.attrs({ required: true, minLength: 5 })`
    background-color: turquoise;
`;

function App() {
    return (
        <div>
            <Father>
                <Box bgColor="teal">
                    <Text>span</Text>
                </Box>
                <Circle bgColor="green">
                    <Text as="h1">h1</Text>
                </Circle>
            </Father>

            <Father>
                <Btn bgColor="tomato">Log in</Btn>
                {/* as를 사용함으로써 styled.button => styled.a로 변경 할 수 있다*/}
                <Btn bgColor="blue" as="a" href="/">
                    Log in
                </Btn>
            </Father>

            <Father>
                <Input />
                <Input />
                <Input />
            </Father>
        </div>
    );
}

export default App;
