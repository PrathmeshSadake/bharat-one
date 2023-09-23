import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { db } from "../lib/firebase";
import { collection } from "firebase/firestore";

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
