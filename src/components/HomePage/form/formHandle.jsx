"use client";
import { useState } from "react";
import "../../../styles/form.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function FormHandle() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    country: "",
    jobTitle: "",
    company: "",
    numEmployees: "",
    interest: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.fullName.trim()) {
      formErrors.fullName = "Full name is required";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      formErrors.email = "Work email is required";
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "Invalid email address";
    }

    const mobilePattern = /^\+[1-9]{1}[0-9]{3,14}$/;
    if (!formData.mobileNumber.trim()) {
      formErrors.mobileNumber = "Mobile number is required";
    } else if (!mobilePattern.test(formData.mobileNumber)) {
      formErrors.mobileNumber = "Invalid mobile number (e.g. +1234567890)";
    }

    if (!formData.country.trim()) {
      formErrors.country = "Country is required";
    }

    if (!formData.jobTitle.trim()) {
      formErrors.jobTitle = "Job title is required";
    }

    if (!formData.company.trim()) {
      formErrors.company = "Company name is required";
    }

    if (!formData.numEmployees) {
      formErrors.numEmployees = "Please select the number of employees";
    }

    if (!formData.interest) {
      formErrors.interest = "Please select an interest";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted successfully!");
      console.log(formData);
      setErrors({});
    }
  };

  return (
    <section className="mt-5 form_fields">
      <form onSubmit={handleSubmit}>
        <div class="flex gap-5">
          <div className="w-1/2">
            <div>
              <label className="block mb-2 text-gray-700" htmlFor="fullName">
                Full Name
              </label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
                id="fullName"
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm">{errors.fullName}</span>
              )}
            </div>
          </div>
          <div className="w-1/2">
            <div>
              <label className="block mb-2 text-gray-700" htmlFor="email">
                Work Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                type="email"
                id="email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
          </div>
        </div>

        <div class="flex gap-5">
          <div className="w-1/2">
            <div>
              <label
                className="block mb-2 text-gray-700"
                htmlFor="mobileNumber"
              >
                Mobile Number (with country code)
              </label>
              <input
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${
                  errors.mobileNumber ? "border-red-500" : "border-gray-300"
                }`}
                type="number"
                id="mobileNumber"
                placeholder="+1234567890"
              />
              {errors.mobileNumber && (
                <span className="text-red-500 text-sm">
                  {errors.mobileNumber}
                </span>
              )}
            </div>
          </div>
          <div className="w-1/2">
            <div>
              <label className="block mb-2 text-gray-700" htmlFor="country">
                Country
              </label>
              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${
                  errors.country ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
                id="country"
              />
              {errors.country && (
                <span className="text-red-500 text-sm">{errors.country}</span>
              )}
            </div>
          </div>
        </div>

        <div class="flex gap-5">
          <div className="w-1/2">
            <div>
              <label className="block mb-2 text-gray-700" htmlFor="jobTitle">
                Job Title
              </label>
              <input
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${
                  errors.jobTitle ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
                id="jobTitle"
              />
              {errors.jobTitle && (
                <span className="text-red-500 text-sm">{errors.jobTitle}</span>
              )}
            </div>
          </div>
          <div className="w-1/2">
            <div>
              <label className="block mb-2 text-gray-700" htmlFor="company">
                Company
              </label>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${
                  errors.company ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
                id="company"
              />
              {errors.company && (
                <span className="text-red-500 text-sm">{errors.company}</span>
              )}
            </div>
          </div>
        </div>

        <div class="flex gap-5">
          <div className="w-1/2">
            <div>
              <label
                className="block mb-2 text-gray-700"
                htmlFor="numEmployees"
              >
                Number of Employees
              </label>
              <select
                name="numEmployees"
                value={formData.numEmployees}
                onChange={handleChange}
              
                className={`w-full px-3 py-2 border rounded ${
                  errors.numEmployees ? "border-red-500" : "border-gray-300"
                }`}
                id="numEmployees"
              >
                <option value="">Select...</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
              </select>
              {errors.numEmployees && (
                <span className="text-red-500 text-sm">
                  {errors.numEmployees}
                </span>
              )}
            </div>
          </div>

          <div className="w-1/2">
            <div>
              <label className="block mb-2 text-gray-700" htmlFor="interest">
                I am interested in
              </label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${
                  errors.interest ? "border-red-500" : "border-gray-300"
                }`}
                id="interest"
              >
                <option value="">Select...</option>
                <option value="Product A">Product A</option>
                <option value="Product B">Product B</option>
                <option value="Product C">Product C</option>
              </select>
              {errors.interest && (
                <span className="text-red-500 text-sm">{errors.interest}</span>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-2 text-gray-700" htmlFor="comments">
            Comments
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded border-gray-300"
            id="comments"
            rows="4"
          ></textarea>
        </div>

        <button type="submit" href="" className="Case_study_btn mt-7 ml-auto">
            Submit <FaArrowRightLong />
        </button>

      </form>
    </section>
  );
}
