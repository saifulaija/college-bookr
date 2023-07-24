// ProfilePage.js

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ProfilePage = () => {
  const [userData, setUserData] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user]);

  return (
    <div className="p-4 my-10">
      <Helmet>
        <title>Profile page | CollegeBookr</title>
      </Helmet>
      <div className="max-w-md mx-auto bg-white rounded p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
        <div className="mb-4">
          <p className="text-gray-700 text-sm font-bold mb-2">
            Name: {userData.name}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 text-sm font-bold mb-2">
            Email: {userData.email}
          </p>
        </div>
        <>
          {userData.university && (
            <div>
              <div className="mb-4">
                <p className="text-gray-700 text-sm font-bold mb-2">
                  University: {userData.university}
                </p>
                <div className="mb-4">
                  <p className="text-gray-700 text-sm font-bold mb-2">
                    Address: {userData.address}
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
        <Link to="/update-profile">
          <button className="bg-[#33a688] text-white px-4 py-2 rounded shadow-md">
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
