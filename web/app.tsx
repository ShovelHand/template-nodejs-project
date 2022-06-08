declare function require(moduleName: string): any;

import * as  React from 'react';
import './styles/styleSheet.css';
var ReactDOM = require('react-dom');
import { useState, useEffect } from "react";

import JellicleCatsList from "./components/jellicleCatsList";
import CatForm from "./components/inputs/CatForm";

const Main: React.FC<any> = ({
}: any) => {
	const [entities, setEntities] = useState<Object>({});
	const [entityList, setEntityList] = useState<any>();

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
			setEntities(xhr.response);
		}
		xhr.send();
	};

	getEntities();

	/*note that the xhr call above could return the data as an object, but handling Objects with useEffect reults in an infinite loop. */
	useEffect(() => {
		if (entities.length) {
			const entitiesAsObject = JSON.parse(entities);
			const names = entitiesAsObject.map((cat) =>
				<option value={cat._id} key={cat._id}>{cat.name}</option>
			);
			setEntityList(names);
		}
	}, [entities]);

	return (
		<div id="jellicleCats">
			<JellicleCatsList entityList={entityList} />
			<CatForm updateList={getEntities} />
		</div>
	);

}

ReactDOM.render(<Main />, document.getElementById('root'));