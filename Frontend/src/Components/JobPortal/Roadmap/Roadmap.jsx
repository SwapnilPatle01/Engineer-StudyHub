import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Roadmap = () => {
  return (
    <div
      style={{
        padding: "0.5rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{ maxWidth: "1024px", margin: "0 auto", textAlign: "center" }}
      >
        <Typography>
          <Title
            level={2}
            style={{
              fontSize: "1.8rem",
              fontWeight: "800",
              color: "#1a202c",
              marginBottom: 0,
            }}
          >
            Roadmap - Tech Career Path Explorer
          </Title>
          <Paragraph
            style={{
              fontSize: "1.2rem",
              color: "#2d3748",
              marginBottom: "2rem",
            }}
          >
            Comprehensive Guides to Mastering Technology Careers
          </Paragraph>
        </Typography>
      </div>
    </div>
  );
};

export default Roadmap;
