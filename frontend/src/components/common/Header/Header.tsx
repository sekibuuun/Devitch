import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const Header = () => {
	return (
		<div className="flex justify-between py-3 bg-teal-300">
			<div className="pl-10 flex items-center">
				<h1 className="text-white text-2xl font-bold">Header</h1>
			</div>
			<div className="pr-10">
				<Avatar>
					<AvatarImage />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
		</div>
	);
};

export { Header };
