import { CustomLightButton } from "@/widgets/Buttons";
import { CustomInput } from "@/widgets/Inputs";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";

export const BodyContainer = styled(Box)(({ theme }) => ({
  borderLeft: "1px solid black",
  borderRight: "1px solid black",
}));

export default function LoginPage({ children }) {
  return (
    <Grid
      container
      sx={{ minHeight: `calc(100vh - 176px)` }}
      justifyContent="center"
      alignItems={"center"}
    >
      <Grid item xs={11} sm={11} md={8} lg={4} xl={3}>
        <Card
          sx={{ boxShadow: "2px 2px rgba(0,0,0,.5)", borderRadius: "15px" }}
        >
          <Box
            sx={{
              borderBottom: "1px solid black",
              py: 3,
              px: 3.5,
              backgroundColor: "orange",
            }}
          >
            <Typography variant="h5">Login</Typography>
          </Box>
          <CardContent>
            <Stack spacing={2}>
              <CustomInput
                fullWidth
                label="Email Address"
                variant="outlined"
                helperText=""
              />
              <CustomInput
                fullWidth
                label="Password"
                variant="outlined"
                helperText=""
                type="password"
              />
              <CustomLightButton variant="outlined">Login</CustomLightButton>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
