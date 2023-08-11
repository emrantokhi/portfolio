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

export default function PetPhotos() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const petImages = [
        'https://i.imgur.com/6s1Y83V.png',
        'https://i.imgur.com/F7JRPzR.png',
        'https://i.imgur.com/cOIlba7.png',
        'https://i.imgur.com/PyEb8ym.png',
        'https://i.imgur.com/Nf9nJQj.png',
        'https://i.imgur.com/N9OGxrV.png',
        'https://i.imgur.com/yX6ApgI.png',
        'https://i.imgur.com/Ba5UIIT.png',
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
            {petImages.map((src, index) => (
                <img
                    src={src}
                    onClick={() => openImageViewer(index)}
                    width="250"
                    height="200"
                    key={index}
                    style={classes.photo}
                    alt=""
                />
            ))}

            {isViewerOpen && (
                <ImageViewer
                    src={petImages}
                    currentIndex={currentImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                />
            )}
        </div>
    );
}