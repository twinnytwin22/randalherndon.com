import Slider from "react-slick";

export const ImageSlider = ({ project, index, settings }: any) => {
    return (
        <div key={index}>
            <Slider {...settings}>
                {project.images?.map((image: string, index: number) => (
                    <img
                        key={index}
                        className="h-full w-full pl-2.5 "
                        src={image}
                        alt={`${project?.title} - Image ${index}`}
                    />
                ))}
            </Slider>
        </div>
    );
};
