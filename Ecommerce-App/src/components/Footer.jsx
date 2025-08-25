const Footer = () => {
  return (
    <div className=" flex flex-col  items-center text-2xl mt-10 w-full">
      {/* px-40 p-20 */}
      <ul className="flex justify-center items-center  gap-20 cursor-pointer text-[#47579E]">
        <li> About us</li>
        <li> Contact us</li>
        <li> Terms and Conditions</li>
        <li>Shipping & Returns</li>
        <li> Privacy Policy</li>
      </ul>

      <div>
        <p className="text-center mt-5 text-sm">
          Copyright © 2025 Ecommerce-App. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
