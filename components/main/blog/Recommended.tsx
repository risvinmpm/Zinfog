import React from "react";
import Title from "../../common/Title";
import Link from "next/link";

const Recommended = () => {
  return (
    <div className="pb-10 lg:pb-20 xl:pb-30 bg-[#131321]">
      <div className="main-padding">
        <div className="text-center mb-2">
          <Title items={["Recommended topics"]} />
        </div>
        <hr className="border border-gray-700" />
        <div className="flex gap-5 pt-10">
          <Link href=""><button type="button" className="px-5 py-2 rounded-full bg-[#2B2D3F] cursor-pointer">Art</button></Link>
          <Link href=""><button type="button" className="px-5 py-2 rounded-full bg-[#2B2D3F] cursor-pointer">Ux Case Study</button></Link>
          <Link href=""><button type="button" className="px-5 py-2 rounded-full bg-[#2B2D3F] cursor-pointer">ux</button></Link>
          <Link href=""><button type="button" className="px-5 py-2 rounded-full bg-[#2B2D3F] cursor-pointer">Design</button></Link>
          <Link href=""><button type="button" className="px-5 py-2 rounded-full bg-[#2B2D3F] cursor-pointer">Odoo development</button></Link>
          <Link href=""><button type="button" className="px-5 py-2 rounded-full bg-[#2B2D3F] cursor-pointer">crm</button></Link>
          <Link href=""><button type="button" className="px-5 py-2 rounded-full bg-[#2B2D3F] cursor-pointer">hrm</button></Link>
          <Link href=""><button type="button" className="px-5 py-2 rounded-full bg-[#2B2D3F] cursor-pointer">Mobile trends</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
