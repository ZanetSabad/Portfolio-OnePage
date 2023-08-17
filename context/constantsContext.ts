import React from "react"

import iconLinks from "../constants/IconLinks"
import navLinks from "../constants/navLinks"
import contactLinks from "../constants/contactLinks"
import skillsData from '../constants/skillsData';
import certificates from "../constants/certificates";

import { IconLink } from "../constants/IconLinks"
import { NavLink } from "../constants/navLinks"
import { ContactLink } from "../constants/contactLinks"
import { SkillData } from "../constants/skillsData"
import { Certificate } from "../constants/certificates";


type ContextProps = {
    iconLinks? :IconLink[];
    navLinks? : NavLink[];
    contactLinks? : ContactLink[];
    skillsData?: SkillData[];
    certificates?: Certificate[]
}

export const context: ContextProps = {
    iconLinks,
    navLinks,
    contactLinks,
    skillsData,
    certificates,
}

const ConstantsContext = React.createContext(context)

export default ConstantsContext