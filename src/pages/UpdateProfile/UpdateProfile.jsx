// InputForm.js

import { useContext, useEffect, useState } from "react";
import { BsSave } from "react-icons/bs";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  console.log(user.email);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const university = form.university.value;
    const address = form.address.value;
    const updateDoc = { university, address };
    console.log(updateDoc);

    fetch(`http://localhost:5000/profile-update/${userData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateDoc),
    })
      .then((res) => res.json())
      .then((data) => {
       
        if (data.modifiedCount > 0) {
          toast.success("Class Update Successful");

          navigate("/profile");
        }
      });
  };

  return (
    <div className="p-4 max-w-md mx-auto my-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="university"
            className="block text-gray-700 font-bold mb-2"
          >
            University:
          </label>
          <input
            type="text"
            id="university"
            name="university"
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter your university"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 font-bold mb-2"
          >
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter your address"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#33a688] text-white px-4 py-2 rounded shadow-md flex items-center"
        >
          <BsSave className="mr-2" />
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
