import { Suspense, lazy } from "react";

const Board_List = lazy(() => import("../pages/board/ListPage"))
const Board_Read = lazy(() => import("../pages/board/ReadPage"))
const Board_Regist = lazy(() => import("../pages/board/RegistPage"))
const Board_Modify = lazy(() => import("../pages/board/ModifyPage"))

const BoardRouter = ({Loading}) => {
    return ( [
        {
            path : "list",
            element:<Suspense fallback={Loading}><Board_List/></Suspense>
        },
        {
            path : "read/:rno",
            element:<Suspense fallback={Loading}><Board_Read/></Suspense>
        },
        {
            path : "register",
            element:<Suspense fallback={Loading}><Board_Regist/></Suspense>
        },
        {
            path : "modify",
            element:<Suspense fallback={Loading}><Board_Modify/></Suspense>
        }
    ] );
}
 
export default BoardRouter;