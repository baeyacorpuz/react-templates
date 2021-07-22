import { useEffect } from "react";

import { PUBLIC_KEY } from "../../../utils/variables";

import {
  CERTIFICATE_DID,
  CERTIFICATE_NAMESPACE,
  CERTIFICATE_PUBKEY_ID,
  certificatePublicKey
} from "../../../config";

const jsigs = require("jsonld-signatures");
const {RSAKeyPair} = require('crypto-ld');
const { contexts } = require("security-context");
const credentialsv1 = require("../../../utils/credentials.json");
const { vaccinationContext } = require("vaccination-context");
const { documentLoaders } = require("jsonld");
const { node: documentLoader } = documentLoaders;

const customLoader = (url) => {
  const c = {
    [CERTIFICATE_DID]: certificatePublicKey,
    [CERTIFICATE_PUBKEY_ID]: certificatePublicKey,
    "https://w3id.org/security/v1": contexts.get(
      "https://w3id.org/security/v1"
    ),
    "https://www.w3.org/2018/credentials#": credentialsv1,
    "https://www.w3.org/2018/credentials/v1": credentialsv1,
    [CERTIFICATE_NAMESPACE]: vaccinationContext,
  };
  let context = c[url];
  if (context === undefined) {
    context = contexts[url];
  }
  if (context !== undefined) {
    return {
      contextUrl: null,
      documentUrl: url,
      document: context,
    };
  }
  if (url.startsWith("{")) {
    return JSON.parse(url);
  }
  return documentLoader()(url);
};

const CertificateStatus = ({ certificate }) => {
  const CERTIFICATE_CONTROLLER_ID = "https://dict.gov.ph/";
  console.log(certificate, "CERTSTTAUS")

  useEffect(() => {
    console.log("VVERIF Y")
    async function verifyData() {
      try {
        console.log("try")
        const signedJSON = await JSON.parse(certificate);
        const publicKey = {
          "@context": jsigs.SECURITY_CONTEXT_URL,
          id: "did:philippines",
          type: "RsaVerificationKey2018",
          controller: CERTIFICATE_CONTROLLER_ID,
          publicKeyPem: PUBLIC_KEY,
        };
        console.log("pumasok dito", publicKey)

        const controller = {
          "@context": jsigs.SECURITY_CONTEXT_URL,
          id: CERTIFICATE_CONTROLLER_ID,
          publicKey: [publicKey],
          // this authorizes this key to be used for making assertions
          assertionMethod: [publicKey.id],
        };
        console.log("pumasok din dito", controller)

        const key = new RSAKeyPair(publicKey);
        console.log("pumasok pa dito", key)
        const { AssertionProofPurpose } = jsigs.purposes;
        console.log("pumasok pa ulit dito")
        const { RsaSignature2018 } = jsigs.suites;
        const certResult = await jsigs.verify(signedJSON, {
          suite: new RsaSignature2018({ key }),
          purpose: new AssertionProofPurpose({ controller }),
          documentLoader: customLoader,
          compactProof: false,
        });


        if (certResult.verified) {
          console.log("hereherehere");
          alert("Verified");
        } else {
          console.log("not not")
        }
      } catch (err) {
        console.log('Invalid data', certificate);
      } finally {
        console.log("finally");
      }
    }

    verifyData();
  }, [certificate]);

  return <></>;
};

export default CertificateStatus;
