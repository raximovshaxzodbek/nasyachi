import React from "react";

const ClientsList = () => {
  return (
    <div className="mt-[15px] flex h-[calc(100vh-120px)] w-[calc(100vw-340px)] flex-col items-center justify-start overflow-auto rounded-xl p-4 py-6 shadow-lg shadow-gray-400">
      <table className="w-[98%] border border-black text-center">
        <thead>
          <tr className="h-[50px] border border-black">
            <th>Ismi</th>
            <th>Pasport Seriya</th>
            <th>Contact</th>
            <th>Plastik karta raqami</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[50px] border border-black">
            <td>Alixon</td>
            <td>AC 2034521</td>
            <td>+998 94 784 54 84</td>
            <td>9860 4547 4416</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClientsList;
