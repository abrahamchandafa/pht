import {
  Sheet,
  Typography,
  Container,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemDecorator,
  Box,
} from "@mui/joy";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../media/logo2.png";
import facebook from "../media/icons/FB3.webp";
import instagram from "../media/icons/Instagram-1.webp";
import linkedin from "../media/icons/Linkedin-1.webp";

const Footer = () => {
  return (
    <Sheet
      component="footer"
      sx={{
        py: 6,
        bgcolor: "black",
        color: "white",
        backdropFilter: "blur(40px)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography
              level="h6"
              sx={{ mb: 2, fontWeight: "bold", color: "gold" }}
            >
              Quick Links
            </Typography>
            <Link
              to="/"
              style={{
                display: "block",
                marginBottom: "8px",
                color: "white",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              to="/products"
              style={{
                display: "block",
                marginBottom: "8px",
                color: "white",
                textDecoration: "none",
              }}
            >
              Products
            </Link>
            <Link
              to="/services"
              style={{
                display: "block",
                marginBottom: "8px",
                color: "white",
                textDecoration: "none",
              }}
            >
              Services
            </Link>
            <Link
              to="/about"
              style={{
                display: "block",
                marginBottom: "8px",
                color: "white",
                textDecoration: "none",
              }}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              style={{
                display: "block",
                color: "white",
                textDecoration: "none",
              }}
            >
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              level="h6"
              sx={{ mb: 2, fontWeight: "bold", color: "gold" }}
            >
              Contact Us
            </Typography>
            <List>
              <ListItem sx={{ color: "white" }}>
                <ListItemDecorator>
                  <MapPin color="white" />
                </ListItemDecorator>
                Dar Es Salaam, Tanzania.
              </ListItem>
              <ListItem sx={{ color: "white" }}>
                <ListItemDecorator>
                  <Phone color="white" />
                </ListItemDecorator>
                +255 652 95 88 99
              </ListItem>
              <ListItem sx={{ color: "white" }}>
                <ListItemDecorator>
                  <Mail color="white" />
                </ListItemDecorator>
                innocentchandafa@gmail.com
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, bgcolor: "white" }} />{" "}
        {/* Optional: Change divider color */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography
              level="h4"
              sx={{ textAlign: "center", color: "white" }}
            >
              © 2021-2025 Power Home Tech Services Ltd. All Rights Reserved
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                px: "0",
                py: "0",
                mx: "0",
                my: "0",
                boxSizing: "content-box",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  maxWidth: "80%",
                  maxHeight: "80%",
                  objectFit: "contain",
                  display: "block",
                }}
              ></img>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link to="https://www.facebook.com/innocent.chandafa.1">
              <img
                src={facebook}
                alt="Facebook"
                style={{width: "60px", height: "60px", marginLeft: "20px"}}
              />
            </Link>
            <Link to="https://www.instagram.com/powerhometechservices?igsh=a3B6d2I2Y21tYnAz">
              <img
                src={instagram}
                alt="Instagram"
                style={{width: "60px", height: "60px", marginLeft: "20px"}}
              />
            </Link>
            <Link to="https://www.linkedin.com/in/innocent-ernest-chandafa-14b66a1ba/">
              <img
                src={linkedin}
                alt="LinkedIn"
                style={{width: "60px", height: "60px", marginLeft: "20px"}}
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Sheet>
  );
};

export default Footer;
