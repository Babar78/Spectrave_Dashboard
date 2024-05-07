import React from 'react';
import anomalyImg from "../../assets/images/defect01.png";
import siteInfoImg from "../../assets/images/site_model.jpeg";
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

import { toast } from 'react-toastify';

const ReportTab = () => {
    // Function to fetch image data as base64
    const getImageDataAsBase64 = async (imageUrl) => {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    };

    // Function to handle the download of the images
    const handleDownload = async () => {
        const zip = new JSZip();
        const img = zip.folder("images");

        try {
            const anomalyImgData = await getImageDataAsBase64(anomalyImg);
            const siteInfoImgData = await getImageDataAsBase64(siteInfoImg);

            // Add images to the zip folder
            img.file("anomaly.png", anomalyImgData.split(',')[1], { base64: true });
            img.file("siteInfo.png", siteInfoImgData.split(',')[1], { base64: true });

            // Generate the zip file
            zip.generateAsync({ type: "blob" })
                .then(function (content) {
                    toast.success('Download Successful!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    saveAs(content, "spectrave-report.zip");

                });
        } catch (error) {
            console.error("Error fetching image data:", error);
        }
    };

    return (
        <div className='flex flex-col items-center text-center'>
            <h2 className='text-2xl font-bold text-primary'>Download Images</h2>
            <p>
                Download the images below for further analysis and documentation.
            </p>
            <button className='bg-secondary text-white rounded-md px-4 py-2 mt-5' onClick={handleDownload}>
                Download
            </button>
        </div>
    );
};

export default ReportTab;
