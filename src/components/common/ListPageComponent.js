import { Button, CardFooter, IconButton } from "@material-tailwind/react";

const ListPageComponent = ({
  movePage,
  startNum,
  endNum,
  prevBtn,
  nextBtn,
  pageNums,
  page,
}) => {

  const handleClickPage = (pageNum) => {

    movePage(pageNum)

  }

  return (
    <div>
      <CardFooter 
        className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        {prevBtn ? (
          <Button 
            variant="outlined" 
            size="sm" 
            onClick={() => handleClickPage(startNum-1)}>

            Previous
            
          </Button>
        ) : (
          <span></span>
        )}

        <div className="flex items-center gap-2" >
          {pageNums.map((pageNum) => (
            <IconButton 
              key ={pageNum} 
              variant="outlined" 
              size="sm" 
              onClick={() => handleClickPage(pageNum)}>

              {pageNum}

            </IconButton>
          ))}
        </div>

        {nextBtn ? (
          <Button 
            variant="outlined" 
            size="sm" 
            onClick={() => handleClickPage(endNum-1)}>

            Next

          </Button>
        ) : (
          <span></span>
        )}
      </CardFooter>
    </div>
  );
};

export default ListPageComponent;
