import { FaTwitter } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import {
  BiBell,
  BiMessageSquareDetail,
  BiSearch,
  BiUser,
} from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { CgMoreO } from "react-icons/cg";
export const generalLinks = [
  {
    path: "/",
    title: "",
    icon: FaTwitter,
  },
  {
    path: "/",
    title: "Home",
    icon: AiFillHome,
  },
  {
    path: "#",
    title: "Explore",
    icon: BiSearch,
  },
  {
    path: "#",
    title: "Notification",
    icon: BiBell,
  },
  {
    path: "#",
    title: "Message",
    icon: BiMessageSquareDetail,
  },
  {
    path: "#",
    title: "Communities",
    icon: BsPeople,
  },
  {
    path: "#",
    title: "Verified",
    icon: GoVerified,
  },
  {
    path: "#",
    title: "Account",
    icon: BiUser,
  },
  {
    path: "#",
    title: "More",
    icon: CgMoreO,
  },
];
export const HomeLinks = [
  {
    id: "for_you",
    title: "For You",
  },
  {
    id: "following",
    title: "Following",
  },
];
