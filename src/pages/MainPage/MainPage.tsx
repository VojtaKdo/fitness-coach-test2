import { Divider, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export function MainPage() {
  return (
    <>
      <h1>Fitness Coach</h1>
      <Grid container spacing={2} flexDirection={"column"}>
        <Grid item>
          <Link to={"/dashboard"}>Dash</Link>
        </Grid>
        <Grid item>
        <Link to={"/signin"}>Signin</Link>
        </Grid>
        <Grid item>
        <Link to={"/signup"}>Dash</Link>
        </Grid>
      </Grid>
    </>
  );
}
