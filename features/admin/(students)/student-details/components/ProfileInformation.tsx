import Card from "@/components/shared/Card/Card";
import Divider from "@/components/shared/Divider/Divider";
import { MdPerson } from "react-icons/md";

const ProfileInfomation = () => {
  return (
    <Card as="section">
      <div className="flex items-center gap-2 p-4">
        <MdPerson className="text-2xl" />
        <h3>Profile Information</h3>
      </div>
      <Divider />
      <div className="grid grid-cols-2 grid-rows-1 gap-4 py-2 px-4">
        <div>
          <h4 className="text-gray-700 font-normal text-sm tracking-wider">FULL NAME</h4>
          <p className="text-md tracking-wider font-semibold">
            Martin Bautista
          </p>
        </div>
        <div>
          <h4 className="text-gray-700 font-normal text-sm tracking-wider">EMAIL ADDRESS</h4>
          <p className="text-md tracking-wider font-semibold">
            martinbautista0288@outlook.com
          </p>
        </div>
        <div>
          <h4 className="text-gray-700 font-normal text-sm tracking-wider">LOCATION</h4>
          <p className="text-md tracking-wider font-semibold">
            Mabalacat, Philippines
          </p>
        </div>
        <div>
          <h4 className="text-gray-700 font-normal text-sm tracking-wider">EDUCATION LEVEL</h4>
          <p className="text-md tracking-wider font-semibold">Bachelor</p>
        </div>
        <div>
          <h4 className="text-gray-700 font-normal text-sm tracking-wider">FIELD OF STUDY</h4>
          <p className="text-md tracking-wider font-semibold">
            Computer Science
          </p>
        </div>
        <div>
          <h4 className="text-gray-700 font-normal text-sm tracking-wider">UNIVERSITY</h4>
          <p className="text-md tracking-wider font-semibold">
            Holy Angel University
          </p>
        </div>
        <div>
          <h4 className="text-gray-700 font-normal text-sm tracking-wider">GRADUATION YEAR</h4>
          <p className="text-md tracking-wider font-semibold">2027</p>
        </div>
        <div>
          <h4 className="text-gray-700 font-normal text-sm tracking-wider">LANGUAGES</h4>
          <p className="text-md tracking-wider font-semibold">
            English, Filipino
          </p>
        </div>
      </div>
    </Card>
  );
};


export default ProfileInfomation;