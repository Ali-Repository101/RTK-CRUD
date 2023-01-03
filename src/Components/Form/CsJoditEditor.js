import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const CsJoditEditor = ( props ) => {
	console.log("propsValue", props)
	const config = {
        uploader: {
              insertImageAsBase64URI: true,
            //   url: '',
        },
}
	const editor = useRef(null);
	// const [content, setContent] = useState('');

	return (
		<JoditEditor
			ref={editor}
			value={props.content}
			config={config}
			onBlur={(e) => props.onBlur(e)} 
			className="mt-5"
		/>
	);
};
export default CsJoditEditor