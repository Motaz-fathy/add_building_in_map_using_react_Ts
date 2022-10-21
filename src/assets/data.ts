import { User } from "../@types/user";
import { countriesList } from "./countriesList";

export const users: User[] = [
  {
    name: "Motaz Fathy",
    id: "111",
    buildingList: [countriesList[1], countriesList[2]],
  },
  {
    name: "Zinab mortada",
    id: "22",
    buildingList: [
      countriesList[3], 
      countriesList[2],
      countriesList[5],
      countriesList[10],
    ],
  },
];
