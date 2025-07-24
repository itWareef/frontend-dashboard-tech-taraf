import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const BtnSubmit = ({ formik, isPending, text }) => {
  return (
    <Button
      type="submit"
      disabled={!(formik.isValid && formik.dirty) || isPending}
      className="w-[360px] h-[45px] mx-auto block bg-secondary hover:bg-secondary/80 text-white cursor-pointer"
    >
      {isPending ? (
        <div className="flex justify-center items-center gap-2">
          <span>{text}</span>
          <Loader2 className="h-4 w-4 animate-spin" />
        </div>
      ) : (
        text
      )}
    </Button>
  );
};

export default BtnSubmit;
