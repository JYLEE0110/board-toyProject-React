import { Suspense, lazy } from "react";
import MainPage from "../pages/MainPage";
import BoardRouter from "./BoardRouter";
import LoadingPage from "../pages/LoadingPage";
import { createBrowserRouter } from "react-router-dom";



const Loading = <LoadingPage/>

// 게시판
const Board_Index = lazy(() => import("../pages/board/IndexPage"))

const router = createBrowserRouter([

    {
        path: "",
        element : <MainPage></MainPage>
    },
    {
        path : "board",
        element : <Suspense fallback={Loading}><Board_Index/></Suspense>,
        children : BoardRouter(Loading)
    }

])

export default router;