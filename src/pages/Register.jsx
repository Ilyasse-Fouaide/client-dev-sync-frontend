import React from "react";
import Email from "../components/Email";
import PersonalInfo from "../components/PersonalInfo";
import AdditionalInfo from "../components/AdditionalInfo";

function Register() {
	const [currentStep, setCurrentStep] = React.useState(1);

	const [email, setEmail] = React.useState("");
	const [full_name, setFullName] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [location, setLocation] = React.useState(null);
	const [birthday, setBirthday] = React.useState(null);

	const renderdField = (step) => {
		switch (step) {
			case 1:
				return (
					<Email
						email={email}
						setEmail={setEmail}
						setCurrentStep={setCurrentStep}
					/>
				);

			case 2:
				return (
					<PersonalInfo
						full_name={full_name}
						password={password}
						setFullName={setFullName}
						setPassword={setPassword}
						setCurrentStep={setCurrentStep}
					/>
				);

			case 3:
				return (
					<AdditionalInfo
						email={email}
						full_name={full_name}
						password={password}
						setBirthday={setBirthday}
						setLocation={setLocation}
						setCurrentStep={setCurrentStep}
					/>
				);
		}
	};

	return (
		<div className="flex h-screen">
			<div className="w-[60%]">{renderdField(currentStep)}</div>
			<div className="w-[40%] bg-purple-600"></div>
		</div>
	);
}

export default Register;
