import React from "react";
import { Divider } from "@chakra-ui/react";
import HomeIcon from "@mui/icons-material/Home";
import { formatDistanceStrict } from "date-fns";

const Properties = ({ properties }: any) => {
  const createdAt = new Date(properties.createdAt);
  const createAtDays = formatDistanceStrict(createdAt, new Date(), {
    unit: "day",
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgb(251,65,73)",
            width: "7%",
            height: "5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <HomeIcon />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <div>
              <span>{properties.title}</span>
            </div>
            <span style={{ color: "#6C7291" }}>{properties.description}</span>
          </div>
          <div>
            <span>{createAtDays} ago</span>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Properties;
