import { Permission, User } from "../authentication/Users";
import { Modulos } from "./modulos";

export interface TabsModulos {
    id: number | null;
    name: string | null;
    description: string | null;
    modulo: Modulos;
    permiso: Permission,
    user: User,
    href: string,
    icon: string,
}