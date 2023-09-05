import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const checkNull = (obj) => {
  const result = {};

  for (const attr in obj) {
    const attrName = attr;
    const attrValue = obj[attr];

    if (attrValue && attrValue !== "null") {
      result[attrName] = attrValue;
    }
  }

  return result
}

const useQueryObj = () => {

    const [search, setSearch] = useSearchParams()
    const navigate = useNavigate()

    // 페이지 이동 / 검색 시 setSearch로 쿼리스트링 정보를 추출
    const page = search.get("page") || 1 
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")

    // 쿼리스트링 정보로 NullCheck
    const queryObj = checkNull({page,size,type, keyword})

    // 쿼리스트링 문자열로 생성
    const queryString = createSearchParams(queryObj).toString()

    // List 목록으로 이동 시 뒤에 쿼리스트링이 따라붙으며 navigate로 이동
    const moveList = () => {
      navigate(`../list?${queryString}`)
    }

    // Read 페이지 이동 시 
    const moveRead = (num) => {
      navigate(`../read/${num}?${queryString}`)
    }

    // Modify 페이지 이동 시
    const moveModfiy = (num) => {
      navigate(`../update/${num}?${queryString}`)
    }

    return {setSearch, queryObj, moveList, moveRead, moveModfiy}

}

export default useQueryObj
