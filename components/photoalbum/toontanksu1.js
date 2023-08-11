import ImageViewer from 'react-simple-image-viewer';
import React, { useState, useCallback } from 'react';

var classes = {
    photo: {
        margin: "2px auto",
        paddingLeft: "6px",
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "cover",
        alignItems: "center",
        cursor: "pointer",
    }
};

export default function ToonTanksu1() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const tanku1Images = [
        'https://i.imgur.com/HTBd1nv.jpg',
        'https://i.imgur.com/QWtWQfm.jpg',
    ];

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div>
            {tanku1Images.map((src, index) => (
                <img
                    src={src}
                    onClick={() => openImageViewer(index)}
                    width="310"
                    height="250"
                    key={index}
                    style={classes.photo}
                    alt=""
                />
            ))}

            {isViewerOpen && (
                <ImageViewer
                    src={tanku1Images}
                    currentIndex={currentImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                />
            )}
        </div>
    );
}