const PurchaseList = () => {
  return (
    <div className="mt-[15px] flex h-[calc(100vh-120px)] w-[calc(100vw-340px)] flex-col items-center justify-start overflow-auto rounded-xl p-4 py-6 shadow-lg shadow-gray-400">
      <table className="w-[98%] border border-black text-center">
        <thead>
          <tr className="h-[50px] border border-black">
            <th>ID</th>
            <th>Mijoz ismi</th>
            <th>Mahsulot</th>
            <th>Shu oygacha qarz</th>
            <th>Nechinchi to'lov</th>
            <th>Sana</th>
            <th>To'lov valyutasi</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[50px] border border-black">
            <td>1345</td>
            <td>Abdullajon</td>
            <td>Apple 13 Pro Max</td>
            <td>1 200 000 so'm</td>
            <td>3 - to'lov</td>
            <td>2023-05-21</td>
            <td>So'm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseList;
