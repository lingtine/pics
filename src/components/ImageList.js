import ImageShow from './ImageShow'


function ImageList({images}) {
    const renderedImages = images.map((image,index) => {
        return <ImageShow image={image} key={index} />
    })
    return <div className='columns is-multiline'>{renderedImages}</div>;
}

export default ImageList;