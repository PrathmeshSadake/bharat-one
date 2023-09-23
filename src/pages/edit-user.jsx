import { doc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import toast from "react-hot-toast";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "react-firebase-hooks/firestore";
import { useEffect } from "react";

const EditUserPage = () => {
  const { id } = useParams();
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const [value] = useDocument(doc(db, "users", id), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  useEffect(() => {
    if (value) {
      setName(value.data().name);
      setEmail(value.data().email);
      setAge(value.data().age);
      setCity(value.data().city);
      setGender(value.data().gender);
    }
  }, [value]);

  const editUser = async (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      age.length === 0 ||
      gender.length === 0 ||
      city.length === 0
    ) {
      return toast.error("Please enter all required fields");
    }
    try {
      const userRef = doc(db, "users", id);
      await updateDoc(userRef, {
        name,
        email,
        age,
        gender,
        city,
      });

      toast.success("User edited successfully.");
      setName("");
      setEmail("");
      setAge("");
      setCity("");
      setGender("");
      window.location.replace("/");
    } catch (e) {
      toast.error("Error adding document");
    }
  };
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='w-full mx-auto max-w-md'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <h1 className='block text-center text-gray-700 text-sm font-bold mb-4'>
            Edit User Details
          </h1>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='text'
              placeholder='you@domain.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Age
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='age'
              type='text'
              placeholder='Age'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Gender
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='gender'
              type='text'
              placeholder='Gender'
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              City
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='city'
              type='text'
              placeholder='City'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className='flex items-center justify-between'>
            <button
              onClick={editUser}
              className='bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserPage;
