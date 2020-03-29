import React from 'react';
import { Formik, Form } from 'formik'

const Register = () => {
    return (
        <div className="register-page">
            <div className="register-text">
                <h1>Formulário de Registro de Pessoas</h1>
                <Formik>
                    {({
                        values,
                        errors,
                        handleChange,
                    }) => (
                        <Form>
                            <input 
                            type="password"
                            name="password"
                            onChange={handleChange}
                        />
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Register;
