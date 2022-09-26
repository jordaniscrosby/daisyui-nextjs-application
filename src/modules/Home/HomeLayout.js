import { Box, styled } from "@mui/material";
import Home from "../../../public/svg/Home.svg";
export const HomeContainer = styled(Box)((props) => ({
  height: "calc(100vh - 88px)",
  width: "100% !important",
  backgroundRepeat: "no-repeat !important",
  backgroundSize: "cover !important",
  backgroundAttachment: "fixed",
  backgroundImage: `url(${Home.src})`,
  backgroundColor: "transparent",
}));

export default function HomeLayout() {
  return (
    <HomeContainer>
      <div
        className="hey"
        style={{
          backgroundImage: `url(${Home})`,
          backgroundRepeat: "no-repeat !important",
          backgroundSize: "cover !important",
          width: "100%",
          height: "100%",
        }}
      >
        {JSON.stringify(Home)}
      </div>
    </HomeContainer>
  );
}
