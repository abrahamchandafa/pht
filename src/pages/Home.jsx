import { Box, Typography, Button } from "@mui/joy";
import { useState } from "react";

function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        height: "auto",
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
            color: "gold",
            fontWeight: "bold",
            fontSize: { xs: "3.5rem", md: "4.0rem" },
            background: "linear-gradient(to bottom, gold, rgba(255, 215, 0, 0.5), gold)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Let your Machine Breathe
        </Typography>

        <Typography
          sx={{
            mb: 4,
            fontSize: { xs: "1.0rem", md: "1.8rem" },
            color: "white",
          }}
        >
          At Power Home Tech Services, we pride ourselves on offering the
          highest quality Air conditioning, Refrigeration, HVAC systems,
          electromechanics and electrical solutions throughout Tanzania. Our
          company started in 2019 as a team of graduate students and in 2021 was
          rebranded to Power Home Tech Services.
        </Typography>

        {isExpanded && (
          <>
            <Typography
              sx={{
                mb: 4,
                fontSize: {  xs: "1.0rem", md: "1.8rem" },
                color: "white",
              }}
            >
              We have a team of over 10 experts with a combined experience in
              our industry. We are leaders and innovators in our fields and use
              our expertise to deliver quality products and services on time and
              on budget across air conditioning, refrigeration, and
              electromechanics services. At Power Home Tech, every client is
              important to us. Meeting your objectives, your budget, and your
              timeframes is our priority. We pride ourselves on finding the
              right long-term, sustainable solution for your project because at
              Power Home Tech Services, we care.
            </Typography>

            <Typography
              sx={{
                mb: 4,
                fontSize: {  xs: "1.0rem", md: "1.8rem"  },
                color: "white",
              }}
            >
              At Power Home Tech, every client is important to us. Meeting your
              objectives, your budget, and your timeframes is our priority. We
              pride ourselves on finding the right long-term, sustainable
              solution for your project because at Power Home Tech Services, we
              care.
            </Typography>
          </>
        )}

        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button
            variant="solid"
            color="neutral"
            size="lg"
            sx={{
              color: "gold"
            }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Learn More"}
          </Button>
          <Button
            variant="outlined"
            color="neutral"
            size="lg"
            sx={{
              color: "gold"
            }}
            component="a"
            href="#"
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;