import { AiFillQuestionCircle } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';

export default function Company_Menu() {
  return (
    <>
      <div className="w-[200px] p-3 bg-white shadow-lg ">
        <ol className="space-y-2 ">
          <li className="text-black hover:text-[#8DC63F] text-base font-normal">
            <a
              href="../inventory-warehouse-management"
              className="flex items-center"
            >
              <span className="mr-3">
                <AiFillQuestionCircle />
              </span>{' '}
              About us
            </a>
          </li>
          <li className="text-black hover:text-[#8DC63F] text-base font-normal">
            <a href="../quality-management" className="flex items-center">
              <span className="mr-3">
                <FaUserAlt />
              </span>{' '}
              Career
            </a>
          </li>
          <li className="text-black hover:text-[#8DC63F] text-base font-normal">
            <a href="../purchase-management" className="flex items-center">
              <span className="mr-3">
                <AiFillMessage />
              </span>{' '}
              Contact Us​
            </a>
          </li>
        </ol>
      </div>
    </>
  );
}
