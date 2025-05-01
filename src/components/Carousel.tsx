import { useState } from "react";

const IMAGE_1_URL = "https://cdn.pixabay.com/photo/2024/11/25/10/38/mountains-9223041_1280.jpg";
const IMAGE_2_URL = "https://media.istockphoto.com/id/178377795/ko/%EC%82%AC%EC%A7%84/%EC%8D%AC%EB%9D%BC%EC%9D%B4%EC%A6%88-%ED%92%8D%EA%B2%BD-great-smoky-mountains-national-park-gatlinburg-tn.jpg?s=1024x1024&w=is&k=20&c=YMSWkaZmQbMIATu-PS8KlLhjJ3KqLh1xoWqF-iXP3tk=";
const IMAGE_3_URL = "https://media.istockphoto.com/id/177561693/ko/%EC%82%AC%EC%A7%84/%EA%B0%9C%ED%8B%80%EB%A6%B0%EB%B2%84%EA%B7%B8-tn-great-smoky-mountains-national-park-%EB%A9%8B%EC%A7%84-%EC%9D%BC%EB%AA%B0-%ED%92%8D%EA%B2%BD.jpg?s=1024x1024&w=is&k=20&c=2jI_SF42-QkItGdPgRHGUOYOJtLB9J0ZdMTLUJnP6wU=";
export default function Carousel() {
    const [activeImage, setActiveImage] = useState(1);
    console.log(activeImage);
    return (
        <>
        <div>
            <div className="carousel">
                <ul className="carousel__sliders">
                    <input
                        type="radio"
                        name="radio-buttons"
                        id="img-1"
                        checked={activeImage === 1}
                        readOnly
                    />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img
                                alt="scenery 1"
                                src={IMAGE_1_URL}
                            />
                        </div>
                        <div className="carousel__controls">
                            <label
                                onClick={() => setActiveImage(3)}
                                className="carousel__slide-prev"
                            >
                                <span>&lsaquo;</span>
                            </label>
                            <label
                                onClick={() => setActiveImage(2)}
                                className="carousel__slide-next"
                            >
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input
                        type="radio"
                        name="radio-buttons"
                        id="img-2"
                        checked={activeImage === 2}
                        readOnly
                    />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img
                                alt="scenery 2"
                                src={IMAGE_2_URL}
                            />
                        </div>
                        <div className="carousel__controls">
                            <label
                                onClick={() => setActiveImage(1)}
                                className="carousel__slide-prev"
                            >
                                <span>&lsaquo;</span>
                            </label>
                            <label
                                onClick={() => setActiveImage(3)}
                                className="carousel__slide-next"
                            >
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input
                        type="radio"
                        name="radio-buttons"
                        id="img-3"
                        checked={activeImage === 3}
                        readOnly
                    />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img
                                alt="scenery 3"
                                src={IMAGE_3_URL}
                            />
                        </div>
                        <div className="carousel__controls">
                            <label
                                onClick={() => setActiveImage(2)}
                                className="carousel__slide-prev"
                            >
                                <span>&lsaquo;</span>
                            </label>
                            <label
                                onClick={() => setActiveImage(1)}
                                className="carousel__slide-next"
                            >
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <div className="carousel__dots">
                        <label
                            onClick={() => setActiveImage(1)}
                            className="carousel__dot"
                            id="img-dot-1"
                        ></label>
                        <label
                            onClick={() => setActiveImage(2)}
                            className="carousel__dot"
                            id="img-dot-2"
                        ></label>
                        <label
                            onClick={() => setActiveImage(3)}
                            className="carousel__dot"
                            id="img-dot-3"
                        ></label>
                    </div>
                </ul>
            </div>
        </div>
        </>
    );
}