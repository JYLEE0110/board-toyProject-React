import { useEffect, useState } from "react";
import { getBoardList } from "../../api/boardAPI";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import ListPageComponent from "../common/ListPageComponent";

const initState = {
  list: [],
  total: 0,
  page: 0,
  size: 0,
  startNum: 0,
  endNum: 0,
  prevBtn: false,
  nextBtn: false,
  replyLast: false,
  pageNums: [],
};

const Listcomponent = ({ queryObj, movePage, moveRead }) => {
  const [boardList, setBoardList] = useState({ ...initState });

  useEffect(() => {
    getBoardList(queryObj).then((data) => {
      setBoardList(data);
    });
  }, [queryObj]);

  const TABLE_HEAD = ["Bno", "Writer", "Title", "RegistDate", "FileName"];

  return (
    <div>
      
      <CardBody className="px-3">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {boardList.list.map(
              ({ bno, writer, boardTitle, regDate, fileName }, index) => {
                const isLast = index === boardList.list.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={bno}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {bno}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {writer}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        onClick={() => moveRead(bno)}
                      >
                        {boardTitle}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {regDate}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {fileName || ""}
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>

      <ListPageComponent movePage={movePage} {...boardList}></ListPageComponent>
    </div>
  );
};

export default Listcomponent;
