import styled from "styled-components";

// interface를 사용하여 bgColor의 type을 선언
interface CircleProps {
    // bgColor가 반드시 있어야 한다 => required
    bgColor: string;
    // borderColor가 없어도 된다 => optional
    borderColor?: string;
    text?: string;
}

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

// App.tsx에서 선언한 색상을 Circle 함수에 전송
// Circle 함수에서 Container를 호출하므로 Container에 styled.div<ContainerProps>를 선언함
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 50%;
    border-color: 3px solid ${(props) => props.borderColor};
    color: white;
    font-size: 200%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

// { bgColor }: CircleProps => bgColor는 CircleProps에 정의된 CircleProps이다
function Anohter_Circle({
    bgColor,
    borderColor,
    // text의 default 값을 설정
    text = "default text",
}: CircleProps) {
    return (
        // borderColor의 default 값을 설정
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {text}
        </Container>
    );
}

//----------------------------------------------------------------------------------//
interface PlayerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj: PlayerShape) => `
    Hello ${playerObj.name} you are ${playerObj.age} years old.;
`;

sayHello({ name: "KHH", age: 24 });

export default Anohter_Circle;
