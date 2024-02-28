import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constant";

const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {
  const transformation = transformationTypes[type];
  return (
   <>
    <Header title={transformation.title} 
    subTitle={transformation.subTitle} 
    />
    <TransformationForm/>
   </>
  );
};

export default AddTransformationTypePage;
