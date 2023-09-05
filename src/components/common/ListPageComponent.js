import { Button, CardFooter, IconButton } from "@material-tailwind/react";

const ListPageComponent = ({ movePage,startNum, endNum, prevBtn, nextBtn, pageNums, page }) => {
  return (
    <div>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        
        <Button variant="outlined" size="sm">
          Previous
        </Button>

        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </div>
  );
};

export default ListPageComponent;
