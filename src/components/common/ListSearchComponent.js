import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { CardHeader, Input, Option, Select, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const initState = {

    type : "",
    keyword : "",

}

const ListSearchComponent = ({ moveSearch }) => {

    const [searchObj, setSearchObj] = useState({...initState})

    useEffect(() => {

        

    })

  return (
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            {/* <Typography variant="h5" color="blue-gray">
              Recent Transactions
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the last transactions
            </Typography> */}
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max ">
            <div className="flex w-50 flex-col gap-6">
              <Select label="Select Type" >
                <Option>작성자</Option>
                <Option>제목</Option>
                <Option>내용</Option>
              </Select>
            </div>
            <div className="w-50 md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>
  );
};

export default ListSearchComponent;
