import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./CardExchangeSelectButton.scss";

export default function SelectLabels({ allCoins, coin, setCoin }) {
  const handleChange = (event) => {
    setCoin(allCoins.find(({ symbol }) => event.target.value === symbol));
  };

  return (
    <div className="card-exchange--select-button">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Сurrency</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={coin.symbol}
          label="Сurrency"
          onChange={handleChange}
        >
          {allCoins.map((coin) => (
            <MenuItem key={coin.id} value={coin.symbol}>
              {coin.symbol}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
