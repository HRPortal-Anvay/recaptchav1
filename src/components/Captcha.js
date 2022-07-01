import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const Captcha = () => {
  const [verfied, setVerifed] = useState(false);

  // recaptcha function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100 mt-4">

        <ReCAPTCHA
          sitekey="6LcVfaMgAAAAAJ2zCFyaqSpK3FodWzhEsmqNgcwL"
          onChange={onChange}
        />

        {/* <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={!verfied}
        >
          Submit
        </button> */}
    </div>
  );
};

export default Captcha;
