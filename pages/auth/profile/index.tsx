import { profile_pic } from "@/Api/Axios/Axios";
import { userProfileMutation } from "@/CusToomHooks/auth.query.hooks";
import React from "react";
// import "../profile/Profile.css"
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  useTheme,
  Container,
} from "@mui/material";
import { useNetworkCheck } from "@/Offline";

const Profile = () => {
  const { data, isPending } = userProfileMutation();
  const theme = useTheme(); // Access the current theme (light or dark mode)

  console.log(data, "profile-data");
  console.log(isPending, "pending");

  const img: File | undefined = data?.data?.profile_pic;
  const { isOnline } = useNetworkCheck();
  return (
    <div className="profile-div">  <Container>
    {isOnline ? (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
            // backgroundColor: theme.palette.background.default, // Dynamic background
            color: theme.palette.text.primary, // Dynamic text color
            transition: "background-color 0.3s, color 0.3s", // Smooth transition
          }}
        >
          <Card
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    maxWidth: 1200, // Increase the maximum width for a larger card
    boxShadow: "none", // No shadow for transparency
    borderRadius: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparent background with low opacity
    backdropFilter: "blur(10px)", // Add a blur effect for a glassy look
    padding: "24px", // Add padding for a spacious look
    transition: "background-color 0.3s",
  }}
>
  {/* Left Section - User Details */}
  <CardContent
    sx={{
      flex: "1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "32px", // Larger padding for a spacious look
    }}
  >
    <Typography
      variant="h3" // Larger font size
      sx={{
        fontWeight: "bold",
        marginBottom: "16px",
        color: theme.palette.text.primary, // Dynamic text color
      }}
    >
      User Profile
    </Typography>
    <Typography
      variant="h5" // Larger font size
      sx={{ marginBottom: "12px" }}
    >
      <span
        style={{
          color: theme.palette.success.main,
          fontWeight: "600",
        }}
      >
        First Name:{" "}
      </span>
      <span style={{ color: theme.palette.error.main }}>
        {data?.data?.first_name || "N/A"}
      </span>
    </Typography>
    <Typography
      variant="h5" // Larger font size
      sx={{ marginBottom: "12px" }}
    >
      <span
        style={{
          color: theme.palette.success.main,
          fontWeight: "600",
        }}
      >
        Last Name:{" "}
      </span>
      <span style={{ color: theme.palette.error.main }}>
        {data?.data?.last_name || "N/A"}
      </span>
    </Typography>
    <Typography variant="h5">
      <span
        style={{
          color: theme.palette.success.main,
          fontWeight: "600",
        }}
      >
        E-Mail:{" "}
      </span>
      <span style={{ color: theme.palette.error.main }}>
        {data?.data?.email || "N/A"}
      </span>
    </Typography>
  </CardContent>

  {/* Right Section - Profile Image */}
  <Box
    sx={{
      flex: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "32px", // Increase padding for a spacious layout
      backgroundColor: "transparent", // Fully transparent
    }}
  >
    <Avatar
      src={profile_pic(img)}
      alt="Profile"
      sx={{
        width: "350px", // Larger image size
        height: "400px", // Larger image size
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
      }}
    />
  </Box>
</Card>

        </Box>
      </>
    ) : (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/2961/2961264.png"
            alt="No internet"
            height={"50px"}
          />
          <h1>No internet connection</h1>
          <p>Try these steps to get back online</p>
          <p> Check Your Router or modem connection</p>
          <p> Try restarting your device</p>
        </div>
      </>
    )}
  </Container></div>
  
  );
};

export default Profile;
