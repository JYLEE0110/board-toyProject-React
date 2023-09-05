import MainNav from "./nav/MainNav";

const BasicLayout = ({children}) => {
    return ( 
        <div className="container mx-auto w-full  ">
            <div>
                <MainNav></MainNav>
            </div>
            <div>
                {children}
            </div>
        </div>
     );
}
 
export default BasicLayout;