import * as React from "react";
import Button from "@mui/material/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

function ColorPicker(props) {
  const { color, setColor, addColor, clrName, handleClrNameChange, colorArray } = props
  return (
    <div>
      <ChromePicker
        color={color}
        onChangeComplete={(newColor) => setColor(newColor.hex)}
        disableAlpha={true}
      />
      <ValidatorForm onSubmit={addColor} instantValidate={false}>
        <TextValidator
          value={clrName}
          onChange={handleClrNameChange}
          label="Color Name"
          className="clrname-input"
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "this field is required",
            "color name must be unique",
            "color already used",
          ]}
          style={{ margin: '2rem 0' }}
        />

        <Button
          variant="contained"
          style={{
            width: "80%",
            height: "5rem",
            fontWeight: "bold",
            fontSize: "1.5rem",
            padding: "1rem 0",
            backgroundColor: `${colorArray.length === 20 ? 'grey' : color}`,
          }}
          disabled={colorArray.length === 20 ? true : false}
          type="submit"
        >
          {colorArray.length === 20 ? "PALETTE FULL" : "ADD COLOR"}
        </Button>
      </ValidatorForm>
    </div>
  )
}

export default ColorPicker;