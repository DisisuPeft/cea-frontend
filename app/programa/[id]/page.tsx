import FooterSection from "@/app/ui/landing/Footer";
import Header from "@/app/ui/landing/Header";
import ProgramaWrapper from "@/app/ui/programas/wrapper";
import { decodePayload } from "@/lib/blob";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { id: idRaw } = decodePayload(id);
  console.log(idRaw);
  return (
    // <div className="">
    <>
      <Header />
      <div className="font-sans">
        <ProgramaWrapper id={idRaw} />
      </div>
      <FooterSection />
    </>
  );
}
