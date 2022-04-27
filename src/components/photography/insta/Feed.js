const Feed = (props) => {
    const { id, caption, media_type, media_url } = props.feed
    let post;

    switch (media_type) {
        case "VIDEO":
            post = (
                <video src={media_url} type="video/mp4"
                    controls playsinline>
                </video>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <img id={id} src={media_url} alt={caption}
                    _desc='Not showing all pictures'
                />
            );
            break;
        default:
            post = (
                <img id={id} src={media_url} alt={caption} 
                draggable='false'     
                />
            );
    }
    return (
        <div className="feed">{post} </div>
    );
}
export default Feed;