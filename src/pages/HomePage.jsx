import clsx from "clsx";
import PageSection from "../Components/PageSection";
export default function HomePage() {
  return (
    <div className=" ">
      <p className="w-full text-center bg-teal-600 font-bold text-4xl text-black p-4">
        Home Page
      </p>
      <PageSection>
        <h2>Vendemos de todo </h2>
      </PageSection>
      <PageSection title='una imagen' className={clsx('bg-pink-700')}>
        <div className="w-full grid grid-cols-2 gap-2">
          <img src="https://picsum.photos/200/300" alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            dignissimos sit delectus expedita corrupti maxime, minus numquam.
            Quisquam facere corrupti corporis voluptates earum. At vel est
            expedita debitis accusantium corrupti.
          </p>
        </div>
      </PageSection>
    </div>
  );
}
