import { FC } from "react";
import "./main-header.css";

export type MainHeaderProps = { userName: string };

export const MainHeader: FC<MainHeaderProps> = (props) => {
  const { userName } = props;
  return (
    <header className="header">
      <span>Not Trello</span>
      <span className="header__username">
        {userName ? userName : "Anonymous"}
      </span>
    </header>
  );
};
