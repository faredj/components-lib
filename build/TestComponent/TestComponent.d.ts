import React, { ReactNode } from "react";
export interface TestComponentProps {
    heading: string;
    content: ReactNode;
}
import "./TestComponent.scss";
declare const TestComponent: React.FC<TestComponentProps>;
export default TestComponent;
