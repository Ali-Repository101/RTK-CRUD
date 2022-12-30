import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const CsJoditEditor = ( props ) => {
	const config = {
        uploader: {
              insertImageAsBase64URI: false,
              url: 'http://your-upload-file-server-host/test-upload-file.php',
        },
}
	const editor = useRef(null);
	// const [content, setContent] = useState('');

	return (	
		<JoditEditor
			ref={editor}
			value={props.content}
			onBlur={(e) => props.onBlur(e)} 
			config={config}
			onChange={(newContent) => {}}
		/>
	);
};
export default CsJoditEditor