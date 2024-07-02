export default function Home() {
	async function getHello(): Promise<string> {
		const res = await fetch("http://localhost:8080/hello");
		return res.text();
	}
	return (
		<div>
			<h1 className="text-3xl font-bold underline">{getHello()}</h1>
		</div>
	);
}
