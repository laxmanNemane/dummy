import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ResetPasswordForm = () => {
    const formik = useFormik({
        initialValues: {
            newPassword: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            newPassword: Yup.string().required('Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
                .required('Required'),
        }),
        onSubmit: (values) => {
            // You can handle reset password submission here
            console.log('Form values:', values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="newPassword">New Password:</label>
                <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.newPassword}
                />
                {formik.touched.newPassword && formik.errors.newPassword ? (
                    <div>{formik.errors.newPassword}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div>{formik.errors.confirmPassword}</div>
                ) : null}
            </div>

            <button type="submit">Reset Password</button>
        </form>
    );
};

export default ResetPasswordForm;
