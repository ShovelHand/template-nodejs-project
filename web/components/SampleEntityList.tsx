import * as React from 'react'
import { useState, useEffect } from "react";


export const SampleEntityList: React.FC<any> = () => {
	const [entities, setEntities] = useState<Object>({});
	const getEntities = () => {
		const xhr = new XMLHttpRequest();
		xhr.open('get', '/sample/list', true);
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
			console.log("response " + xhr.responseText);
			setEntities(xhr.response);
		}
		xhr.send();
	};

	let entityList = "";
	getEntities();
	useEffect(() => {
		console.log(JSON.stringify(entities));
		for (let i = 0; i < entities.lenth; i++) {
			entityList += entities[i].name;
			console.log(JSON.stringify(entities[i]));
		}
	}, [entities]);

	return (
		entityList
	);
};

export default SampleEntityList;
