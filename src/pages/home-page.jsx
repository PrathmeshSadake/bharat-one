import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { db } from "../lib/firebase";
import { collection } from "firebase/firestore";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [values, loading, error] = useCollectionDataOnce(
    collection(db, "users"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  if (values) {
    console.log(values);
  }

  return (
    <div className='mx-auto max-w-7xl py-24'>
      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
      </p>
      {values && (
        <div className='relative overflow-x-auto'>
          <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Email
                </th>
                <th scope='col' className='px-6 py-3'>
                  Age
                </th>
                <th scope='col' className='px-6 py-3'>
                  Gender
                </th>
                <th scope='col' className='px-6 py-3'>
                  City
                </th>
                <th scope='col' className='px-6 py-3'>
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {values.map((user) => {
                return (
                  <tr key={user.id} className='bg-white border-b'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                    >
                      {user.name}
                    </th>
                    <td className='px-6 py-4'> {user.email}</td>
                    <td className='px-6 py-4'> {user.age}</td>
                    <td className='px-6 py-4'> {user.gender}</td>
                    <td className='px-6 py-4'> {user.city}</td>
                    <td className='px-6 py-4'>
                      <Link to={`/edit-user/${user.id}`}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-6 h-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
                          />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HomePage;
