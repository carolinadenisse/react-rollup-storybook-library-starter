import React from "react";
import { Button as ButtonDesign} from 'antd';

interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <ButtonDesign type="primary">{props.label}</ButtonDesign>
};

export default Button;
