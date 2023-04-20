import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import RadioGroup from "@mui/material/RadioGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
// import FormLabel from '@mui/material/FormLabel';
import Checkbox from "@mui/material/Checkbox";

import * as Yup from "yup";

const initialvalues = {
  name: "",
  address: "",
  country: "",
  type: "",
  date: "",
  consultant: "",
  email: "",
  approved: "",
  totalprice: "",
};

export default function Client() {
  const Crmschema = Yup.object({
    name: Yup.string().min(2).max(25).required("Name is required"),
    address: Yup.string().min(10).required("Address is required"),
    country: Yup.string().required("Country is required"),
    type: Yup.array().of(Yup.string()).required("Type is Required"),
    date: Yup.string().required("Date is required"),
    consultant: Yup.string().required("Consultant is required"),
    email: Yup.string().email().required("Email is required"),
    approved: Yup.string().required("Approved is required"),
    totalprice: Yup.string()
      .required("Total Price is required")
      .matches(/^[0-9,.]+$/, "Must be only digits"),
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialvalues,
      validationSchema: Crmschema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  console.log("values", values);
  return (
    <form action="post" onSubmit={handleSubmit} noValidate autoComplete="off">
      {/* component="form" */}
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "80ch" },
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
        noValidate
        autoComplete="off"
      >
        {/* <div>
       <label htmlFor="name">Name</label>
       <input type="text" id='name' name='name' placeholder='Enter name'/>
      </div> */}
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Client Name"
            name="name"
            type="text"
            multiline
            maxrows={4}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
        </div>
        <div style={{ color: "red" }}>
          {errors.name && touched.name ? errors.name : null}
        </div>
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Address"
            name="address"
            type="text"
            multiline
            maxrows={4}
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
        </div>
        <div style={{ color: "red" }}>
          {errors.address && touched.address ? errors.address : null}
        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 690 }}>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
              label="Country"
              name="country"
              type="text"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            >
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="US">US</MenuItem>
              {/* <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
        </div>
        <div style={{ color: "red" }}>
          {errors.country && touched.country ? errors.country : null}
        </div>
        <div style={{ display: "flex", width: "45%" }}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Type</FormLabel>
            <FormGroup
              aria-label="position"
              row
              value={values.type}
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <FormControlLabel
                value="Direct sales"
                control={<Checkbox color="primary" />}
                label="Direct sales"
                labelPlacement="end"
                name="type"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormControlLabel
                value="Consultative sales"
                control={<Checkbox color="primary" />}
                label="Consultative sales"
                labelPlacement="end"
                name="type"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormControlLabel
                value="Request for Proposal"
                control={<Checkbox color="primary" />}
                label="Request for Proposal"
                labelPlacement="end"
                name="type"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormGroup>
          </FormControl>
        </div>
        <div style={{ color: "red" }}>
          {errors.type && touched.type ? errors.type : null}
        </div>

        <div>
          <TextField
            id="date"
            label="Date"
            type="date"
            sx={{ width: "100%" }}
            InputLabelProps={{
              shrink: true,
            }}
            maxrows={4}
            name="date"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.date}
          />
        </div>
        <div style={{ color: "red" }}>
          {errors.date && touched.date ? errors.date : null}
        </div>
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Consultant"
            name="consultant"
            type="text"
            maxrows={4}
            value={values.consultant}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
        </div>
        <div style={{ color: "red" }}>
          {errors.consultant && touched.consultant ? errors.consultant : null}
        </div>
        <div>
          <TextField
            id="outlined-email-input"
            label="Email"
            name="email"
            type="email"
            maxrows={4}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
        </div>
        <div style={{ color: "red" }}>
          {errors.email && touched.email ? errors.email : null}
        </div>
        <div style={{ display: "flex", width: "45%" }}>
          <div>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="approved"
              value={values.approved}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            >
              <p style={{ marginRight: "20px" }}>Approved? </p> &nbsp;
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="NO" />
            </RadioGroup>
          </div>
        </div>
        <div style={{ color: "red" }}>
          {errors.approved && touched.approved ? errors.approved : null}
        </div>
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Total Price"
            name="totalprice"
            type="text"
            maxrows={4}
            value={values.totalprice}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
        </div>
        <div style={{ color: "red" }}>
          {errors.totalprice && touched.totalprice ? errors.totalprice : null}
        </div>
        <div>
          <Button
            variant="outlined"
            type="submit"
            style={{ marginTop: "10px" }}
          >
            Save Client
          </Button>
        </div>
      </Box>
    </form>
  );
}
