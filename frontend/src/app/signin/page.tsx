"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@supabase/supabase-js";
import React from "react";

const NEXT_PUBLIC_SUPABASE_ANON_KEY: string =
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const NEXT_PUBLIC_SUPABASE_URL: string =
	process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";

const supabase = createClient(
	NEXT_PUBLIC_SUPABASE_URL,
	NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

const Signin = () => {
	return (
		<div className="flex justify-center items-center">
			<Auth
				supabaseClient={supabase}
				appearance={{
					theme: ThemeSupa,
					className: {
						input: "hidden",
						label: "hidden",
					},
				}}
				providers={["google", "github"]}
				showLinks={false}
				localization={{
					variables: {
						sign_in: {
							email_label: "",
							password_label: "",
						},
					},
				}}
			/>
		</div>
	);
};

export default Signin;
