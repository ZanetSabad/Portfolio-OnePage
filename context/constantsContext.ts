import React from "react"

import iconLinks from "../constants/IconLinks"
import navLinks from "../constants/navLinks"
import contactLinks from "../constants/contactLinks"
import skillsData from '../constants/skillsData';

import { IconLink } from "../constants/IconLinks"
import { NavLink } from "../constants/navLinks"
import { ContactLink } from "../constants/contactLinks"
import { SkillData } from "../constants/skillsData"


interface ContextProps {
    iconLinks? :IconLink[];
    navLinks? : NavLink[];
    contactLinks? : ContactLink[];
    skillsData?: SkillData[];
}

const context: ContextProps = {
    iconLinks,
    navLinks,
    contactLinks,
    skillsData,
}

const ConstantsContext = React.createContext(context)

export default ConstantsContext