const WorkshopCard = ({ item }) => {
  const { title, description,image } = item || {};
  return (
    <div>
      <div className="card bg-base-100 shadow-md h-[500px]">
        <figure>
          <img
          className="w-full"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <button className="btn text-left btn-outline border-0 border-[#dc2626] border-b-4 text-xl px-10">Selected</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
