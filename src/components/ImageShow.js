function ImageShow({ image }) {
  
  return (
    <div className="column ">
      <img   src={image.urls.small_s3} alt={image.alt_description}/>
    </div>
  );
}

export default ImageShow;
