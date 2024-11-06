import React from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import useLogin from "@/hooks/useLogin";

function Login() {
	const [error, setError] = React.useState(null);

	const emailRef = React.useRef();
	const passwordRef = React.useRef();

	const { mutate, isPending } = useMutation({
		mutationFn: () =>
			useLogin(emailRef.current.value, passwordRef.current.value),
		onSuccess: () => {
			window.location.reload();
		},
		onError: (err) => {
			setError(err.response.data.message);
			passwordRef.current.value = "";
		},
	});

	React.useEffect(() => {
		if (error) {
			emailRef.current.focus();
		}
	}, [error]);

	const login = (e) => {
		e.preventDefault();
		mutate();
	};

	return (
		<div className="relative flex h-svh">
			<div className="flex items-center justify-center bg-background w-full lg:w-[50%]">
				<Card className="max-w-sm mx-auto border-none shadow-none">
					<CardHeader className="text-center">
						<CardTitle className="text-2xl">Log in to your account</CardTitle>
						<CardDescription>
							Enter your email below to login to your account
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={login} className="grid gap-4">
							{error && (
								<Alert variant="destructive">
									<AlertCircle className="w-4 h-4" />
									<AlertDescription>{error}</AlertDescription>
								</Alert>
							)}
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									ref={emailRef}
									type="email"
									placeholder="example@company.com"
									disabled={isPending}
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
									<Link
										href="#"
										className="inline-block ml-auto text-sm underline"
									>
										Forgot your password?
									</Link>
								</div>
								<Input
									id="password"
									ref={passwordRef}
									type="password"
									disabled={isPending}
								/>
							</div>
							<Button type="submit" className="w-full" disabled={isPending}>
								{isPending ? <Loader2 className="animate-spin" /> : "Login"}
							</Button>
							<Button
								type="button"
								variant="outline"
								className="w-full"
								disabled={isPending}
							>
								Login with Google
							</Button>
						</form>
						<div className="mt-4 text-sm text-center">
							Don&apos;t have an account?{" "}
							<Link to="/register" className="underline">
								Sign up
							</Link>
						</div>
					</CardContent>
				</Card>
			</div>
			<div className="hidden bg-muted w-0 lg:w-[50%] lg:flex"></div>
		</div>
	);
}

export default Login;
