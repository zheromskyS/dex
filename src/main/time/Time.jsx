import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./Time.scss";

export const Time = ({ timeRange, setTimeRange }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        className="button-time"
        variant={timeRange === 1 ? "outlined" : "contained"}
        onClick={() => setTimeRange(1)}
      >
        24H
      </Button>

      <Button
        className="button-time"
        variant={timeRange === 7 ? "outlined" : "contained"}
        onClick={() => setTimeRange(7)}
      >
        1W
      </Button>

      <Button
        className="button-time"
        variant={timeRange === 30 ? "outlined" : "contained"}
        onClick={() => setTimeRange(30)}
      >
        1M
      </Button>
    </Stack>
  );
};
