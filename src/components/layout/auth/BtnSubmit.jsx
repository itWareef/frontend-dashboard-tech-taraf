import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const BtnSubmit = ({ formik, isPending, text }) => {
  return (
    <Button
      disabled={!(formik.isValid && formik.dirty) || isPending}
      type="submit"
      className="w-[360px] h-[45px] hover:bg-secondary/80 mx-auto block bg-secondary text-white cursor-pointer"
    >
      {isPending ? (
        <div className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>{text}</span>
        </div>
      ) : (
        text
      )}
    </Button>
  );
};

export default BtnSubmit;
