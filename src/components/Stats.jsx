import data from "../mock/data.json";

const Stats = () => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-2 place-items-center gap-8 md:grid-cols-4">
        {data["section-one"].items.map((stat) => (
          <div key={stat.id} className="relative text-secondary">
            <div className="bg-secondary w-1 h-full absolute left-[-20px]"></div>
            <h3 className="text-5xl font-bold w-full">{stat.number}</h3>
            <p className="text-pretty">{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Stats;
