import * as React from 'react'
import axios from 'axios';

export const CatForm: React.FC<any> = () => {
	const [name, setName] = React.useState<string>("");
	const [facts, setFacts] = React.useState<string>("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!name) {
			console.warn("can't submit new jellicle cat with no name");
			return;
		}
		axios.post("/cats",
			{ "name": name, "facts": facts }).then((response) => {
			console.log(response);
		})
			.catch(function (error) {
				console.log(error);
			});
	};

	const handleNameChange = (event) => {
		setName(event.target.value)
	};
	const handleFactsChange = (event) => {
		setFacts(event.target.value)
	};

	return (
		<form onSubmit={handleSubmit} id="newCatForm">
			<div>
			<label>
				Cat's Name:
				<input type="text" value={name} onChange={handleNameChange}/>
				</label>
			</div>
			<div>
				<label>
					Jellicle Facts for this Jellicle Cat:
					<input type="text" value={facts} onChange={handleFactsChange}/>
				</label>
			</div>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default CatForm;