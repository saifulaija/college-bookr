import { useContext, useState } from "react";
import { BsCalendar } from "react-icons/bs";
import { FaUserAlt, FaEnvelope, FaPhone, FaImage } from "react-icons/fa";

import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";

const AdmissionForm = () => {

  const {user} = useContext(AuthContext)

  const email = user?.email;
  const college = useLoaderData();
  const {
    collegeImage,
    _id,
    admissionDate,
    collegeName,
    events,
    collegeDetails,
    sports,
    admissionProcess,
    researchHistory,
  
  } = college;

  const navigate = useNavigate();
  console.log(college);

  const [formData, setFormData] = useState({
    name: "",
    subject: "",

    phoneNumber: "",
    dateOfBirth: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //     console.log(formData);
    const studentData = {
      ...formData,
      collegeImage,
      collegeId: _id,
      admissionDate,
      collegeName,
      events,
      collegeDetails,
      sports,
      admissionProcess,
      researchHistory,
      email
    };
    console.log(studentData);

    fetch("http://localhost:5000/admission", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(studentData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          navigate("/admission");
          toast.success("admission submission successfully");
        }
      });
    // You can handle form submission here, e.g., submit data to the server
  };

  return (
    <div className="flex justify-center items-center my-10 min-h-screen bg-gray-100">
      <form
        className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 w-full md:w-1/2"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Admission Form</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUserAlt className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="pl-10 block w-full py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUserAlt className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="pl-10 block w-full py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
              placeholder="Enter your subject"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaPhone className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="pl-10 block w-full py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Birth
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BsCalendar className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="pl-10 block w-full py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaImage className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              required
              className="pl-10 block w-full py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-[#33a688] text-white rounded-lg hover:bg-yellow-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
