import { Suspense, use } from "react";
import { Button, Typography, Box } from "@mui/material";
import Animals from "./components/Animals";
import { getBreeds } from "./api";

const HomePage = () => {
  return (
    <Box component={"section"}>
      <Typography variant="h1" gutterBottom>
        Welcome to my website
      </Typography>
      <Suspense fallback={<div>Loading...</div>}>
        <Animals />
      </Suspense>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Box>
  );
};

export default HomePage;
