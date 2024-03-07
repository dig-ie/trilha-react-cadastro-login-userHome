// import { useState } from 'react'
// import { useContext } from "react";
import {
  LoginHeaderContainer,
  HeaderLogoContainer,
  ButtonsContainer,
  SearchBarContainer,
  HeaderLink,
  LeftSideHeaderContainer,
} from "./styles";
import { LogonButton } from "../LogonButton/index";
import { SearchBar } from "../SearchBar";
import { UserRoundProfile } from "../UserRoundProfile";
import DioLogo from "../../icons/DioLogo.png";
export const Header = ({
  LoggedHeaderType = false,
  OnClick1,
  OnClick2,
  Text1,
  Text2,
}) => {
  // const logged = useContext(LoginContext);
  return (
    <LoginHeaderContainer>
      <LeftSideHeaderContainer>
        <HeaderLogoContainer>
          <img src={DioLogo} alt="logo" />
        </HeaderLogoContainer>
        {LoggedHeaderType === true ? (
          <>
            <SearchBarContainer>
              <SearchBar />
            </SearchBarContainer>
            <HeaderLink>Live Code</HeaderLink>
            <HeaderLink>Other link</HeaderLink>
          </>
        ) : null}
      </LeftSideHeaderContainer>

      {LoggedHeaderType === false ? (
        <ButtonsContainer>
          <LogonButton OnClick={OnClick1} LogonButtonText={Text1}></LogonButton>
          <LogonButton OnClick={OnClick2} LogonButtonText={Text2}></LogonButton>
        </ButtonsContainer>
      ) : (
        <UserRoundProfile
          SRC="https://avatars.githubusercontent.com/u/101150281?v=4"
          ALT="Profile pic icon/button"
        />
      )}
    </LoginHeaderContainer>
  );
};
