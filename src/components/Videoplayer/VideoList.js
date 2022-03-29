import React, { useEffect, useState } from "react";
import _ from "lodash";
import VideoPlayer from "./video";

    // const linkedinImage = require(`../media/img/linkedin-logo.svg`);

const videoList = [
    {
        id: 1,
        imageSource: "../../../public/images/1.png",
        link: "media/1.mp4",
        description: "Date: 28-10-2021 Time: 12 am ",
    },
    {
        id: 2,
        imageSource: "../../../public/images/1.png",
        link: "media/3.mp4",
        description: "Date: 28-10-2021 Time: 2 am ",
    },
    {
        id: 3,
        imageSource: "../../../public/images/1.png",
        link: "media/3.mp4",
        description: "Date: 28-10-2021 Time: 2 am ",
    },
    {
        id: 4,
        imageSource: "../../../public/images/1.png",
        link: "media/4.mp4",
        description: "Date: 28-10-2021 Time: 3 am ",
    },
    {
        id: 5,
        imageSource: "../../../public/images/1.png",
        link: "media/5.mp4",
        description: "Date: 28-10-2021 Time: 4 am ",
    },
    {
        id: 6,
        imageSource: "../../../public/images/1.png",
        link: "media/6.mp4",
        description: "Date: 28-10-2021 Time: 5 am ",
    },
    {
        id: 7,
        imageSource: "../../../public/images/1.png",
        link: "media/7.mp4",
        description: "Date: 28-10-2021 Time: 6 am ",
    },
    {
        id: 8,
        imageSource: "../../../public/images/1.png",
        link: "media/8.mp4",
        description: "Date: 28-10-2021 Time: 7 am ",
    },
    {
        id: 1,
        imageSource: "../../../public/images/1.png",
        link: "media/1.mp4",
        description: "Date: 28-10-2021 Time: 8 am ",
    },
    {
        id: 2,
        imageSource: "../../../public/images/1.png",
        link: "media/2.mp4",
        description: "Date: 28-10-2021 Time: 9 am ",
    },
    {
        id: 3,
        imageSource: "../../../public/images/1.png",
        link: "media/3.mp4",
        description: "Date: 28-10-2021 Time: 10 am ",
    },
    {
        id: 4,
        imageSource: "../../../public/images/1.png",
        link: "media/4.mp4",
        description: "Date: 28-10-2021 Time: 11 am ",
    },
    {
        id: 5,
        imageSource: "../../../public/images/1.png",
        link: "media/5.mp4",
        description: "Date: 28-10-2021 Time: 12 pm ",
    },
    {
        id: 6,
        imageSource: "../../../public/images/1.png",
        link: "media/6.mp4",
        description: "Date: 28-10-2021 Time: 1 pm ",
    },
    {
        id: 7,
        imageSource: "../../../public/images/1.png",
        link: "media/7.mp4",
        description: "Date: 28-10-2021 Time: 2 pm ",
    },
    {
        id: 8,
        imageSource: "../../../public/images/1.png",
        link: "media/8.mp4",
        description: "Date: 28-10-2021 Time: 3 pm ",
    },
    {
        id: 1,
        imageSource: "../../../public/images/1.png",
        link: "media/1.mp4",
        description: "Date: 28-10-2021 Time: 4 pm ",
    },
    {
        id: 2,
        imageSource: "../../../public/images/1.png",
        link: "media/2.mp4",
        description: "Date: 28-10-2021 Time: 5 pm ",
    },
    {
        id: 3,
        imageSource: "../../../public/images/1.png",
        link: "media/3.mp4",
        description: "Date: 28-10-2021 Time: 6 pm ",
    },
    {
        id: 4,
        imageSource: "../../../public/images/1.png",
        link: "media/4.mp4",
        description: "Date: 28-10-2021 Time: 7 pm ",
    },
    {
        id: 5,
        imageSource: "../../../public/images/1.png",
        link: "media/5.mp4",
        description: "Date: 28-10-2021 Time: 8 pm ",
    },
    {
        id: 6,
        imageSource: "../../../public/images/1.png",
        link: "media/6.mp4",
        description: "Date: 28-10-2021 Time: 9 pm ",
    },
    {
        id: 7,
        imageSource: "../../../public/images/1.png",
        link: "media/7.mp4",
        description: "Date: 28-10-2021 Time: 10 pm ",
    },
    {
        id: 8,
        imageSource: "../../../public/images/1.png",
        link: "media/8.mp4",
        description: "Date: 28-10-2021 Time: 11 pm ",
    },
];

const VideoList = () => {
    const [isPlaying, setPlaying] = useState(null);
    const [renderList, setListToRender] = useState([]);

    useEffect(() => {
        setListToRender(videoList);
    }, []);

    useEffect(() => {
        if (isPlaying) {
            let list = videoList;
            list = _.filter(list, (l) => {
                // (l.imageSource !== isPlaying.imageSource)
                // console.log("Lis === ", l.imageSource, isPlaying.imageSource)
                return l.link !== isPlaying.link;
            });
            console.log("List ==== ", list, videoList);
            setListToRender(list);
        } else {
            setListToRender(videoList);
        }
    }, [isPlaying]);

    const link = isPlaying ? require(`../../../public/videos/${isPlaying.id}.mp4`) : null;
    const content = isPlaying ? isPlaying.description : null;

    return (
        <div>
            <div className="grid-container">
            {isPlaying && (
                <div className="col">
                    {/* <h2> */}
                    <video controls autoPlay src={link} />
                    {/* </h2> */}
                    <div>
                        <center><p>DESCRIPTION</p></center>
                        <center><p>{content}</p></center>
                    </div>
                </div>
            )}
            {/* {isPlaying ? '' : ''} */}
            <div className={isPlaying ? "vertical-main" : "main"}>
                <div className="list-div">
                {renderList.map((video) => {
                    return (
                        <VideoPlayer setPlaying={setPlaying} video={video} />
                    );
                })}
                </div>
            </div>
            </div>
            <div class="bottom">
            </div>
        </div>
    );
};

export default VideoList;
