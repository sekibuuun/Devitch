import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<div className="flex justify-between py-3 bg-teal-300">
			<Link href="/" className="pl-10 flex items-center">
				<h1 className="text-white text-2xl font-bold">Devitch</h1>
			</Link>
			<div className="pr-10">
				<Link href="/signin">
					<Avatar>
						<AvatarImage />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>{" "}
				</Link>
			</div>
		</div>
	);
};

export { Header };
