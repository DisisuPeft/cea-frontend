"use client";
import { useGetDiplomadoQuery } from "@/redux/control-escolar/programas-educativos/programApiSlice";
import DiplomadoLanding from "./programa";

interface Props {
  id: string;
}
export default function ProgramaWrapper({ id }: Props) {
  const { data: diplomado } = useGetDiplomadoQuery(id);
  return <DiplomadoLanding diplomado={diplomado} />;
}
