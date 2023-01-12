import { useState, useEffect } from "react";
const Book = ({name}) => {
	const [showBook, setShowBook] = useState(false);
	const [inStock, setInStock] = useState(false);

	useEffect(() => {
		console.log("mounts");
		return () => {
			console.log("dismount");
		};
	}, []);
	console.log("render");

	// const [name, setName] = useState("radom")
	return (
		<div style={{border:"1px solid red",margin:"4rem"}}>
			{showBook ? (
				<>
					<h1> This is {name} </h1>
					<p>{inStock ? "Sold Out" : "In Stock"}</p>
				</>
			) : null}

			<button onClick={() => setShowBook(!showBook)}>Show Book</button>
			<button onClick={() => setInStock(!inStock)}>Toggle inStock </button>
		</div>
	);
};
export default Book;
