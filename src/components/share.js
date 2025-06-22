import { useEffect, useState } from "react";
// import MonacoEditor from "react-monaco-editor";
import shareIcon from '../../src/resources/Share.svg'
import downArrow from '../../src/resources/down arrow.svg'
// import axios from 'axios';
import { createNote } from "../services/api.note";
import toast from 'react-hot-toast';
import link from '../../src/resources/link.svg';

import { useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';



export const defaultHTML = `<html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
      h1 {
        color: #cca3a3;
      }
    </style>
    <script type="text/javascript">
      alert("I am a sample... visit devChallengs.io for more projects");
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type="button" value="Click me" />
  </body>
</html>`;

const defaultSnippets = {
    html: defaultHTML,
    javascript: `console.log("Hello, JS!");`,
    typescript: `const greet = (name: string): string => "Hello " + name;`,
};

function ShareCom() {

    const [code, setCode] = useState(defaultHTML);
    const [language, setLanguage] = useState("html");
    const [theme, setTheme] = useState("vs");
    const [dis, setButton] = useState(false)
    const navigate = useNavigate()
    const [isShared, sharedRes] = useState(false)
    let [id, setId] = useState(0)

    function changeTheme(event) {
        setTheme(event.target.value)
    }

    function changeLanguage(event) {
        console.log('..code', code)
        setButton(false)
        const selectedLang = event.target.value;
        setLanguage(selectedLang);
        setCode(defaultSnippets[selectedLang])
        sharedRes(false)

    }

    useEffect(() => { })



    async function saveCode(event) {
        console.log('code', code)
        try {
            let obj = {
                code: code,
                language: language,
                theme: theme,
            }
            let note = await createNote(obj)
            console.log('---Note', note);
            setId(note.id)
            navigate(`/${note.id}`);
            setButton(true)
            sharedRes(true)
            toast.success('Note created .\nYou can now share it with the word!')

        } catch (error) {
            toast.error(error.message);
        }




    }

    async function copyURL() {
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast.success('The URL has been added to your clipboard!');
        } catch (err) {
            console.error(err);
            toast.error(err.message);
        }
    }

    function codeHandler(event) {
        setButton(false)
        sharedRes(false)
        setCode(event);

    }

    function handleEditorDidMount(editor, monaco) {
        editor.focus();
    }



    return (
        <div className="relative">
            <div >
                <Editor
                    // width={auto}
                    height="40.75rem"
                    language={language}
                    theme={theme}
                    value={code}
                    onChange={codeHandler}
                    onMount={handleEditorDidMount}

                    options={{
                        fontSize: 14,
                        fontFamily: 'monospace',
                        lineNumbersMinChars: 3,
                        glyphMargin: false,
                        minimap: { enabled: true },
                        padding: { top: 10, bottom: 10 },
                        wordWrap: "on",
                    }}
                />


            </div>

            <div className="absolute w-full bottom-2">
                <div className="flex justify-between items-center pl-6">
                    <div className="flex items-center">
                        <div className="relative w-fit">
                            <select

                                value={language}
                                onChange={changeLanguage}
                                className="appearance-none w-[100px] text-[12px] outline-none bg-[#CED6E1] text-[#364153] px-[10px]  py-[10px] rounded-[15px]"
                            >
                                <option value={'html'} >Html</option>
                                <option value={'javascript'}>JavaScript</option>
                                <option value={'typescript'}>TypeScript</option>
                                <option value={'css'}>Css</option>

                            </select>

                            <div className="pointer-events-none absolute right-[18px] top-1/2 -translate-y-1/2 text-[#364153]">
                                <img alt="downarrow" src={downArrow} />
                            </div>
                        </div>

                        <div className="relative w-fit ml-2">
                            <select
                                value={theme}
                                onChange={changeTheme}
                                className="appearance-none w-[100px] outline-none text-[12px] bg-[#CED6E1] text-[#364153] px-[10px]  py-[10px] rounded-[15px]"
                            >
                                <option value={'light'}>Light</option>
                                <option value={'vs-dark'}>Dark</option>
                                <option value={'hc-black'}>Black</option>

                            </select>

                            <div className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2 text-[#364153]">
                                <img alt="downarrow" src={downArrow} />
                            </div>
                        </div>


                    </div>
                    <div className="pr-6 flex items-center z-10">
                        {isShared && (
                            <div
                                className={`flex items-center gap-3 p-2 rounded-md ${theme === 'vs-dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
                                    }`}
                            >
                                <button onClick={copyURL}>
                                    <img src={link} alt="Link Icon" />
                                </button>
                                <span className="pr-3">.../{id}</span>
                            </div>

                        )}
                        <button
                            onClick={saveCode}
                            disabled={dis}
                            className="bg-[#406AFF] disabled:bg-gray-400 rounded-[15px] ml-2 text-[#FFFFFE] px-[20px] flex items-center py-[10px]"
                            type="button"
                        >
                            <img className="pr-2" alt="share" src={shareIcon} />
                            Share
                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShareCom