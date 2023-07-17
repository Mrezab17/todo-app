import React, { useState, useEffect } from "react";
import { Formik } from "formik";

const Form = () => {
  const initialValues = {
    name: "",
    lname: "",
    id: "",
    email: "",
    phone: "",
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex_num = /^\d+$/;
    const regex_phone = /^([0|\+[0-9]{1,5})?([0-9]{11})$/;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required";
    } else if (!regex_phone.test(values.phone)) {
      console.log;
      errors.phone = "Phone Number not Valid";
    }
    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length < 3) {
      errors.name = "Name too short";
    }
    if (!values.id) {
      errors.id = "ID is required";
    } else if (values.id.length != 10 || !regex_num.test(values.id)) {
      errors.id = "ID not Valid";
    }
    if (!values.lname) {
      errors.lname = "Last Name is required";
    } else if (values.lname.length < 3) {
      errors.lname = "Last Name too short";
    }

    return errors;
  };

  const submitForm = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        } = formik;
        return (
          <form
            className="bg-gray-300 h-full w-full rounded p-10 pl-10 space-y-0"
            onSubmit={handleSubmit}
          >
            <div className="w-full flex flex-row row-span-1 h-10 space-x-10">
              <input
                type="name"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Your Name"
                className={`bg-white basis-5/12 pl-3 rounded ${
                  errors.name && touched.name ? "input-error" : null
                }`}
              />
              <input
                type="lname"
                name="lname"
                id="lname"
                value={values.lname}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Your Last Name"
                className={`bg-white basis-5/12 pl-3 rounded ${
                  errors.lname && touched.lname ? "input-error" : null
                }`}
              />
            </div>
            <div className="w-full row-span-1 h-10 space-x-0 ">
              {errors.name && touched.name && (
                <div className=" w-5/12 pl-3 text-red-600 inline-block">
                  {errors.name}
                </div>
              )}
              {errors.lname && touched.lname && (
                <div className=" w-6/12 text-red-600 float-right inline-block ">
                  {errors.lname}
                </div>
              )}
            </div>
            <div className="w-full flex flex-row row-span-1 row-start-2 h-10 space-x-5">
              <select
                id="state"
                className="bg-white h-full pl-3 rounded basis-4/12"
              >
                <option>Mazandaran</option>
                <option>Tehran</option>
                <option>Gilan</option>
              </select>
              <select id="sex" className="bg-white pl-3 rounded basis-2/12">
                <option>Male</option>
                <option>Female</option>
              </select>
              <input
                type="text"
                name="id"
                id="id"
                value={values.id}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Your ID"
                className="bg-white basis-4/12 pl-3 rounded "
              />
            </div>
            <div className="w-full row-span-1 h-10 space-x-0 ">
              {errors.id && touched.id && (
                <div className=" w-5/12 text-red-600 float-right inline-block ">
                  {errors.id}
                </div>
              )}
            </div>
            <div className="w-full flex flex-row row-span-1 h-10 space-x-10">
              <input
                type="text"
                name="phone"
                id="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Your Phone Number"
                className="bg-white basis-5/12 pl-3 rounded "
              />
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Your Email"
                className="bg-white basis-5/12 pl-3 rounded "
              />
            </div>
            <div className="w-full row-span-1 h-10 space-x-0 ">
              {errors.phone && touched.phone && (
                <div className=" w-6/12 text-red-600  inline-block ">
                  {errors.phone}
                </div>
              )}
              {errors.email && touched.email && (
                <div className=" w-5/12 pl-3 text-red-600 inline-block float-right">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="w-full flex flex-row row-span-1 row-start-2 h-10 space-x-5">
              <input
                type="submit"
                className={`${
                  dirty && isValid
                    ? "bg-green-600 basis-2/12 rounded-md cursor-pointer"
                    : "invisible"
                } `}
                disabled={!(dirty && isValid)}
              />
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Form;
