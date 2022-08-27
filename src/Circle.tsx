import styled from "styled-components";

// interface를 사용하여 bgColor의 type을 선언
interface CircleProps {
    bgColor: string;
}

// App.tsx에서 선언한 색상을 Circle 함수에 전송
// Circle 함수에서 Container를 호출하므로 Container에 styled.div<CircleProps>를 선언함
const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 50%;
`;

// { bgColor }: CircleProps => bgColor는 CircleProps에 정의된 CircleProps이다
function Circle({ bgColor }: CircleProps) {
    return <Container bgColor={bgColor} />;
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

export default Circle;
