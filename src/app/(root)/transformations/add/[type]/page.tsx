import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constant";
import { getUserById } from "@/lib/action/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const transformation = transformationTypes[type];
  const { userId } = auth();
  console.log("-------------userId--------", userId);

  if (!userId) return redirect("/sign-in");

  const user = await getUserById(userId);
  console.log("---------user fro mongoD----------", user);
  return (
    <>
      <Header title={transformation.title} subTitle={transformation.subTitle} />
      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={userId}
          type={transformation.type as TransformationTypeKey}
          creditBalance={35}
        />
      </section>
    </>
  );
};

export default AddTransformationTypePage;
