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

export default function BlackJackPhotos() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const blackjackImages = [
        'https://i.imgur.com/e050sxC.png',
        'https://i.imgur.com/pckpDdK.png',
        'https://i.imgur.com/2oaEtVC.png',
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
            {blackjackImages.map((src, index) => (
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
                    src={blackjackImages}
                    currentIndex={currentImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                />
            )}
        </div>
    );
}