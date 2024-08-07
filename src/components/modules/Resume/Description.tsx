import { Typography } from "@mui/material";

const Description = ({ desc }:any) => (
  // <p className="experience__description"><>*</>{desc}</p>
  <Typography>
    <span className="text-black">&#x2022; </span> {desc}
  </Typography>
);

export default Description
