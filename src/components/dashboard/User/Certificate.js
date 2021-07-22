import Scanner from "react-webcam-qr-scanner";
import JSZip from "jszip";
import { useState } from "react";


import CertificateStatus from "./CertificateStatus";

const Certificate = () => {
  const [result, setResult] = useState("");
  const CERTIFICATE_FILE = "certificate.json";
  

  const handleDecode = (result) => {
    console.log(result);
    if (result.data) {
      const zip = new JSZip();
      zip
        .loadAsync(result.data)
        .then((contents) => {
          console.log(contents.files[CERTIFICATE_FILE]);
          return contents.files[CERTIFICATE_FILE].asText()
        })
        .then(function (contents) {
          setResult(contents);
        })
        .catch((err) => {
          setResult(result);
        });
    }
  };

  const handleScannerLoad = (mode) => {
    console.log(mode);
  };

  

  return (
    <div>
      <Scanner
        onDecode={handleDecode}
        onScannerLoad={handleScannerLoad}
        constraints={{
          audio: false,
          video: {
            facingMode: "environment",
          },
        }}
        captureSize={{ width: 1280, height: 720 }}
      />
      {/* {result === null && <CertificateStatus certificate={certificate} /> } */}
      <CertificateStatus certificate={result} />
    </div>
  );
};

export default Certificate;
