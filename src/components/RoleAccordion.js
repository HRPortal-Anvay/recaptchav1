import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './RoleAccordion.css';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

export default function RoleAccordion() {
  return (
    <div className="whole">
      <Accordion className="a-main">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>HR Panel</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <div className="checkboxes">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 1"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 2"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 3"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 4"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 5 &nbsp;"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>
            
            <div className="break"></div>

            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 6"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 7"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 8"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 9"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 10"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>

            <div className="break"></div>

            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 11"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 12"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 13"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 14"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 15"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>

          </div>


        </AccordionDetails>
      </Accordion>

      <Accordion style={{ marginTop: "30px" }} className="a-main">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Leave Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="checkboxes">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 1"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 2"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Feature 3"
                labelPlacement="end"
                className="box"
              />
            </FormGroup>
          </div>

        </AccordionDetails>
      </Accordion>
    </div>
  );
}
