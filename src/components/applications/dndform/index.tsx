'use client';

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Tooltip from '@mui/material/Tooltip';
import { jsx } from '@emotion/react';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const DnDForm = () => {
  const [files, setFiles] = React.useState([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const {getRootProps, getInputProps} = useDropzone({onDrop});

  const filesList = files.map(file => (
    <div key={file.name}>
      {file.name} - {file.size} bytes, last modified: {new Date(file.lastModified).toLocaleDateString()}
    </div>
  ));

  return (
    <>
        <style jsx>{`
            body {
                margin: 0px;
            }
            div.dndform {
                background-color: white;
                border-top: 1px dashed black;
            }
            div.dndform > p {
                :hover {
                    color: rgb(0, 0, 255);
                    text-decoration: underline;
                }
                color: black;
                font-size: 0.75em;
                color: black;
                margin-block-start:2px;
                margin-block-end:0; margin-inline-start:0; margin-inline-end:0;
                text-align: top;
            }
            div.dndform>p>span.text {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 20px;
            }
            .icon {
                display: inline-block;
                padding-top:0px;
                margin-top: -2px;
                color: rgb(12, 47, 150);
            }
        `}</style>
        <div className='dndform' {...getRootProps()}>
            <Tooltip title="あなたのお気に入りのファイルを選択してください。">
                <p>
                    <span className="text">
                        <AttachFileIcon fontSize='small' className='icon'/>
                        アップロードしたいファイルを選んでくれよな(｀･ω･´)
                    </span>
                </p>
            </Tooltip>
            <input {...getInputProps()} />
        <div>{filesList}</div>
        </div>
    </>

  );
};

export default DnDForm;
