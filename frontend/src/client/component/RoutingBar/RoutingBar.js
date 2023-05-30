import * as React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Tab = styled(TabUnstyled)`
  color: black;
  cursor: pointer;
  font-size: 0.975rem;
  font-weight: bold;
  font-family: Montserrat;
  height: 50px;
  display: flex;
  align-items: center;

  background-color: transparent;
  width: 80%;
  padding: 12px 16px;
  border-radius: 5px;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;

  &.${tabUnstyledClasses.selected} {
    background-color: #3f3e8d;
    color: white;
    outline: none;

    border-radius: 42px;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;



const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: #e4e8ff;
  border-radius: 42px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function RoutingBar() {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [value, setValue] = React.useState(path);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ width: "100%" }}>
      <TabsUnstyled value={value} defaultValue={0}>
        <TabsList onChange={handleChange}>
          <Tab value="home" onClick={() => navigate("/")}>Home</Tab>
          <Tab value="jobs" onClick={() => navigate("/jobs")}>Jobs</Tab>
          <Tab value="profile" onClick={() => navigate("/profile")}>Profile</Tab>
        </TabsList>
      </TabsUnstyled>
    </Container>
  );
}
