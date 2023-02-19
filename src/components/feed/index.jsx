import { Box } from "@mui/material";
import PostComponent from "../post";

function FeedComponent() {
  return (
    <Box flex={4} p={2}>
      <PostComponent />
      <PostComponent />
      <PostComponent />
      <PostComponent />
      <PostComponent />
      <PostComponent />
    </Box>
  );
}

export default FeedComponent;
