import React from "react";
import Email from "../components/Email";
import PersonalInfo from "../components/PersonalInfo";

function Register() {
	const [currentStep, setCurrentStep] = React.useState(1);

	const [email, setEmail] = React.useState("");
	const [full_name, setFullName] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [location, setLocation] = React.useState(null);
	const [birthday, setBirthday] = React.useState(null);

	const [errors, setErrors] = React.useState({});

	const renderdField = (step) => {
		switch (step) {
			case 1:
				return <Email setEmail={setEmail} setCurrentStep={setCurrentStep} />;

			case 2:
				return (
					<PersonalInfo
						setFullName={setFullName}
						setPassword={setPassword}
						setCurrentStep={setCurrentStep}
					/>
				);

			case 3:
				return <div>Location</div>;
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
