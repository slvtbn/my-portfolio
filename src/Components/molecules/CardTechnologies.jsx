export default function CardTechnologies({ img, name, subtitle }) {
  return (
    <div className="w-52 h-52 rounded-lg bg-secondary-background lg:w-36 lg:h-36 flex flex-col justify-center items-center ">
      <img className="w-16 lg:w-12" src={img} alt="" />
      <h3 className="text-white font-semibold mt-6">{name}</h3>
      <p className="text-sm">{subtitle}</p>
    </div>
  );
}
