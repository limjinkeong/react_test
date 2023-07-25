import React from 'react';

function GalleryList() {
    const galleryItems = [
        {
            id: 1,
            title: '직장일 색깔 테스트',
            imageSrc: 'images/image2.png',
            link:'/pages/TestPage',
        },
        {
            id: 2,
            title: 'Image2',
            imageSrc: 'images/image2.png',
            link:'',
        },
        {
            id: 3,
            title: 'Image3',
            imageSrc: 'images/image3.png',
            link:'',
        },
        {
            id: 4,
            title: 'Image4',
            imageSrc: 'images/image2.png',
            link:'',
        },
        {
            id: 5,
            title: 'Image5',
            imageSrc: 'images/image3.png',
            link:'',
        },

        // ... add more gallery items as needed
    ];

    return (
        <div className="page-wrap">
            {/*<h2>Test List</h2>*/}
            <div className="gallery-list">
                {galleryItems.map(item => (
                    <div className="gallery-item" key={item.id}>
                        <a href={item.link}>
                            <h3>{item.title}</h3>
                            <img src={item.imageSrc} alt={item.title} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GalleryList;