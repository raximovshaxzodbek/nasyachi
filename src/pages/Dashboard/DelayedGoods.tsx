import React from "react";

const DelayedGoods = () => {
  return (
    <table className="w-full border border-black text-center">
      <caption>Mudati O'tib ketgan maxsulotlar</caption>
      <thead>
        <tr className="h-[50px] border border-black">
          <th>Id</th>
          <th>Mijoz</th>
          <th>Maxsulot</th>
          <th>Shu oygacha qarzi</th>
          <th>Nechinchi to'lov</th>
          <th>Sana</th>
          <th>To'lov valyutasi</th>
        </tr>
      </thead>
      <tbody>
        <tr className="h-[50px] ">
          <td>1234</td>
          <td>Qosimjon</td>
          <td>Samsung S22 Ulta</td>
          <td>1 200 300 so'm</td>
          <td>3 - to'lov</td>
          <td>2023-04-30</td>
          <td>So'm</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DelayedGoods;
