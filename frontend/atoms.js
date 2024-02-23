import axios from "axios";
import { atom, selector } from "recoil";

export const Onlineusers = atom({
  key: "Onlineusers",
  default:[]
});

export const Messageatom = atom({
  key: "Messageatom",
  default: "",
});

export const roomatom = atom({
  key: "roomatom",
  default: "",
});

export const roomnameatom = atom({
  key: "roomnameatom",
  default: "",
});
export const receivedatom = atom({
  key: "receivedatom",
  default: [],
});

export const socketidatom = atom({
  key: "socketidatom",
  default: "",
});
