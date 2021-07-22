export const certificate = {
	"@context": [
		"https://www.w3.org/2018/credentials/v1",
		"https://cowin.gov.in/credentials/vaccination/v1"
	],
	"type": [
		"VerifiableCredential",
		"ProofOfVaccinationCredential"
	],
	"credentialSubject": {
		"type": "Person",
		"id": "19882120590",
		"refId": "77889506",
		"name": "Bondoc Anderson, Wick ",
		"gender": "Male",
		"age": "33",
		"nationality": "PH",
		"address": {
			"streetAddress": "Ajoya Subdivision",
			"streetAddress2": "",
			"district": "Cebu",
			"city": "",
			"addressRegion": "Homa",
			"addressCountry": "IN",
			"postalCode": "6015"
		}
	},
	"issuer": "https://cowin.gov.ph/",
	"issuanceDate": "2021-07-14T11:40:14.039Z",
	"evidence": [
		{
			"id": "https://cowin.gov.ph/vaccine/781261605",
			"feedbackUrl": "https://cowin.gov.ph/?781261605",
			"infoUrl": "https://cowin.gov.ph/?781261605",
			"certificateId": "781261605",
			"type": [
				"Vaccination"
			],
			"batch": "batch-01",
			"vaccine": "Pfizer",
			"manufacturer": "ph",
			"date": "2021-04-21T05:30:28.187Z",
			"effectiveStart": "2021-04-21",
			"effectiveUntil": "2022-04-21",
			"dose": 1,
			"totalDoses": 2,
			"verifier": {
				"name": "ss"
			},
			"facility": {
				"name": "Lapu-Lapu Hoops Dome",
				"address": {
					"streetAddress": "df",
					"streetAddress2": "",
					"district": "Cebu",
					"city": "",
					"addressRegion": "Lapus",
					"addressCountry": "IN",
					"postalCode": "6015"
				}
			}
		}
	],
	"nonTransferable": "true",
	"proof": {
		"type": "RsaSignature2018",
		"created": "2021-07-14T11:40:14Z",
		"verificationMethod": "did:philippines",
		"proofPurpose": "assertionMethod",
		"jws": "eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..EFZkMc8IFnZ-tb9P7IQNYx3U_iaUnnnbNdPz_DE1f10a3NMedSiIMvpkR1lYayA5rpmZvgmYYTJ9aAKyZn_3dkL7KmL0r5pO8Adm0mUSNk7o9TbZgJC13d-HfpbF0EjUNQoOjqf3vZBH8aQzCFMk0a7R6P9WI7crATSmk3sWNCF7C1GJqs6GGnhAREj_hehwIjIsImIG7rgvKvHSxeHqTelmazg5Moa4IJPljgjxf3bVQe95YDhp1bX9IaispkW9UFnOSKTDmftD3aq63SVF6cd6qNsSMbZ_1XS6HLfHoK5XU_Wo3RwH7t2S9tPGhNDRyeY91YQ3zb3FBHseAaVOEA"
	}
}
