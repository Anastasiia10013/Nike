import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 max-container"
    >
      <div className="flex flex-1 flex-col">
        <h3 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg leading-[68px]">
          Sign Up for <span className="text-coral-red"> Super </span>
          <span className="text-coral-red"> Updates </span>& Newsletter
        </h3>
      </div>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
