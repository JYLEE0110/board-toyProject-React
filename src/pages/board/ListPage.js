import { type } from "@testing-library/user-event/dist/type";
import Listcomponent from "../../components/board/ListComponent";
import useQueryObj from "../../hooks/useQueryObj";
import ListSearchComponent from "../../components/common/ListSearchComponent";
import { Card } from "@material-tailwind/react";

const ListPage = () => {
  const { queryObj, setSearch, moveRead } = useQueryObj();
  console.log(queryObj);

  // ListComponent에 포함된 ListPageComponent에게 props로 내려 줌
  // 페이지(num)이 바뀔때마다 queryObj가 변경되며 useEffect가 일어나고 다시 리렌더링
  const movePage = (num) => {
    queryObj.page = num;
    setSearch({ ...queryObj });
  };

  const moveSearch = (type, keyword) => {
    queryObj.page = 1;
    queryObj.type = type;
    queryObj.keyword = keyword;

    setSearch({ ...queryObj });
  };

  return (
    <Card className="h-full w-full">
    
        <ListSearchComponent
          moveSearch={moveSearch}
        ></ListSearchComponent>
     

        <Listcomponent
          queryObj={queryObj}
          moveRead={moveRead}
          movePage={movePage}
        ></Listcomponent>
   
    </Card>
  );
};

export default ListPage;
