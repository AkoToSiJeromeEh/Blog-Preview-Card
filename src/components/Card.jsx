import PropTypes from "prop-types";

export const Card = ({
  BlogImage,
  BlogType,
  BlogDate,
  BlogTitle,
  BlogDesc,
  BlogUsrProf,
  BlogUsrName,
}) => {
  return (
    <div
      className=" 
	border-2 
	p-6   
	w-fit h-fit
  bg-neutral-white  
  border-neutral-black  
    rounded-2xl  
	card-shadow
	flex flex-col gap-6
    "
    >
      <div className="flex flex-col gap-4 overflow-hidden ">
        <picture className="img-container overflow-hidden">
          <img className="rounded-md w-fit h-fit " src={BlogImage} alt="" />
        </picture>
        <span className=" bg-primary-yellow w-fit p-[6px_13px_6px_13px]  font-extrabold  rounded-[5px] text-[13px]  ">
          {BlogType}
        </span>
        <p className=" text-sm font-medium ">{BlogDate}</p>
        <h1 className="text-2xl font-black hover:text-primary-yellow   hover:ease-in-out hover:transition-colors ">
          {BlogTitle}
        </h1>
        <p className=" text-paragraph text-neutral-gray w-[20rem] ">
          {" "}
          {BlogDesc}
        </p>
      </div>
      <div>
        <picture className=" inline-block  align-middle me-3 ">
          <img className=" w-9 " src={BlogUsrProf} alt="" />
        </picture>
        <h2 className=" inline-block align-middle font-bold">{BlogUsrName}</h2>
      </div>
    </div>
  );
};
Card.propTypes = {
  BlogUserName: PropTypes.string.isRequired,
  BlogType: PropTypes.string.isRequired,
  BlogImage: PropTypes.string.isRequired,
  BlogDate: PropTypes.string.isRequired,
  BlogTitle: PropTypes.string.isRequired,
  BlogDesc: PropTypes.string.isRequired,
  BlogUsrProf: PropTypes.string.isRequired,
  BlogUsrName: PropTypes.string.isRequired,
};
