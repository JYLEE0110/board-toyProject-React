import { useSearchParams } from "react-router-dom";

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

}
