import { Box, Typography } from "@mui/joy";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        padding: 2, 
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box
        sx={{
          width: "50%", 
          padding: 2, 
          color: "white",
        }}
      >
        <Typography
          level="h1"
          component="h1"
          sx={{
            mb: 2,
            fontFamily: "display",
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            
          }}
        >
          Let your Machine Breathe
        </Typography>

        <Typography
          sx={{
            mb: 4,
            fontSize: { xs: "md", md: "xl" },
            color: "white"
          }}
        >
          At Power Home Tech Services, we pride ourselves on offering the
          highest quality Air conditioning, Refrigeration, HVAC systems,
          electromechanics and electrical solutions throughout Tanzania. Our
          company started in 2019 as a team of graduate students and in 2021 was
          rebranded to Power Home Tech Services. 
        </Typography>

        <Typography
          sx={{
            mb: 4,
            fontSize: { xs: "md", md: "xl" },
            color: "white"
          }}
        >        
          We have a team of over 10
          experts with a combined experience in our industry. We are leaders and
          innovators in our fields and use our expertise to deliver quality
          products and services on time and on budget across air conditioning,
          refrigeration, and electromechanics services. At Power Home Tech,
          every client is important to us. Meeting your objectives, your budget,
          and your timeframes is our priority. We pride ourselves on finding the
          right long-term, sustainable solution for your project because at
          Power Home Tech Services, we care.
        </Typography>

        <Typography
          sx={{
            mb: 4,
            fontSize: { xs: "md", md: "xl" },
            color: "white"
          }}
        >
        At Power Home Tech,
          every client is important to us. Meeting your objectives, your budget,
          and your timeframes is our priority. We pride ourselves on finding the
          right long-term, sustainable solution for your project because at
          Power Home Tech Services, we care.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
