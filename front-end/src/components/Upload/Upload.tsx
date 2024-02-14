import React, { useState } from "react";
import Result from "./Result";
const Uploader = () => {
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<
    "initial" | "uploading" | "success" | "fail"
  >("initial");
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setStatus("initial");
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        // API CALL
        if (file) {
            setStatus("uploading");
            console.log("Uploading file...");

            const formData = new FormData();
            formData.append("file",     file);
            console.log(file)
            try {
                const result = await fetch("", { // API URL here
                    method: "POST",
                    body: formData,
                });

                const data = await result.json();

                console.log(data);
                console.log("Successful operation");
                setStatus("success");
            } catch (error) {
                console.error(error);
                setStatus("fail");
            }
        }

    };

    return (
        <>
            <div>
                <label htmlFor="file" className="sr-only">
                    Choose a file
                </label>
                <input id="file" type="file" onChange={handleFileChange} />
            </div>
            {file && (
                <section>
                    File details:
                    <ul>
                        <li>Name: {file.name}</li>
                        <li>Type: {file.type}</li>
                        <li>Size: {file.size} bytes</li>
                    </ul>
                </section>
            )}

            {file && <button onClick={handleUpload}>Upload a file</button>}
            <Result status={status} />
        </>
    );
};

export default Uploader;