import React from "react";
import cl from './FormsControl.module.css';
import { Field } from "redux-form";

const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${cl.formControl} ${hasError ? cl.error : ''}`}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )

}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (<FormControl {...props}><textarea {...input} {...restProps} /></FormControl>)
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (<FormControl {...props}><input {...input} {...restProps} /></FormControl>)
}

export const createField = (placeholder, name, validators, component, props = {}, text = '', className, id = null) => (
    <div>
        <Field placeholder={placeholder}
            name={name}
            validatate={validators}
            component={component}
            className={cl[className]}
            {...props}
        /> {text}
    </div>
)
