import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const CsJoditEditor = ( props ) => {
    // console.log("inside props", props)
    // console.log("inside props", props.onBlur)
	const editor = useRef(null);
	// const [content, setContent] = useState('');

	return (
		<JoditEditor
			ref={editor}
			value={props.content}
			onBlur={(e) => props.onBlur(e)} 
			onChange={(newContent) => {}}
		/>
	);
};
export default CsJoditEditor