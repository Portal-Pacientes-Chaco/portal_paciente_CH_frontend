import React from "react";
import * as MdIcon from 'react-icons/md'

export const SidebarData = [
    {
        title: "Grupo Familiar",
        path: "/usuario/grupo-familiar",
        icon: <MdIcon.MdFamilyRestroom className="menu-icon"/>,
        cName: "sidebar-text"
    },
    {
        title: "Historia Clínica",
        path: "/usuario/historia-clinica",
        icon: <MdIcon.MdFolderShared className="menu-icon"/>,
        cName: "sidebar-text"
    },
    {
        title: "Calendario de vacunacion",
        path: "/usuario/calendario-vacunacion",
        icon: <MdIcon.MdEditCalendar className="menu-icon"/>,
        cName: "sidebar-text"
    },
    {
        title: "Programa Sumar",
        path: "/usuario/programa-sumar",
        icon: <MdIcon.MdAddCircleOutline className="menu-icon"/>,
        cName: "sidebar-text"
    }
]