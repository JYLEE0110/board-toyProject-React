import axios from "axios"

export const getBoardList = async() => {

    const res = await axios.get(`http://localhost:8080/api/board/list`)

    return res.data

}