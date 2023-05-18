import { formatDistanceStrict } from "date-fns";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const InforBox = ({ properties }: any) => {
  const createdAt = new Date(properties.createdAt);
  const createAtDays = formatDistanceStrict(createdAt, new Date(), {
    unit: "day",
  });

  return (
    <Col xs={12} sm={6} md={12} lg={4} xl={4}>
      <div
        style={{
          backgroundColor: "rgb(26,28,36)",
          marginTop: "20px",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <span>Recently created</span>
            <div>
              <span style={{ color: "#00D25A" }}>{createAtDays} Ago</span>
            </div>
          </div>
          <div>
            <Image
              src={properties.images[0]}
              alt="profile"
              roundedCircle
              style={{ width: "55px", height: "55px" }}
            />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default InforBox;
