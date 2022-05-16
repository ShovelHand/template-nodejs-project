import * as React from 'react'
import { useState, useEffect } from "react";


export const SampleEntityList: React.FC<any> = () => {
	const [entities, setEntities] = useState<Object>({});
	const getEntities = () => {
		const xhr = new XMLHttpRequest();
		xhr.open('get', '/cats/list', true);
		xhr.onreadystatechange = () => {
			switch (xhr.status) {
				case 200:

					break;
				case 400:
					console.error(xhr.response);
					break;
			}
		}
		xhr.onload = () => {
		//	console.log("response " + xhr.responseText);
			setEntities(xhr.response);
		}
		xhr.send();
	};

	let entityList = "";
	getEntities();
	useEffect(() => {
		console.log((entities));
		if (entities[0]) {
			const entitiesAsObject = JSON.parse(entities);
			console.log(entitiesAsObject);
			console.log(entitiesAsObject[0]["name"]);
		//	const names = entities.map((cat) =>
			//	JSON.stringify(cat));
		}
	}, [entities]);

	return (
		entityList
	);
};

export default SampleEntityList;