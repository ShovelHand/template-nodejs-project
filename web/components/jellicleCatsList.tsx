import * as React from 'react'
import { useState, useEffect } from "react";

export interface props {
	entityList: any;
}
export const JellicleCatList: React.FC<any> = (props) => {


	return (
		<div id="catList">
			<select name="cats" multiple size="6">{props.entityList}</select>
		</div>
	);
};

export default JellicleCatList;