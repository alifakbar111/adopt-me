import { Link } from "react-router-dom";
const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="relative block">
      <div>
        <img src={hero} alt={name} className="rounded-lg w-full h-full" />
      </div>
      <div className="relative bottom-0 left-0 bg-white p-4">
        <h1 className="text-lg leading-6 font-medium text-gray-900">{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
